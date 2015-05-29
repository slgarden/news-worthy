require 'httparty'

helpers do

  include HTTParty

  def bing(query, category)
    query = query.gsub(" ", "+")

    header = {:headers => {'Authorization' => 'Basic Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ=' }}
    url = "https://api.datamarket.azure.com/Bing/Search/v1/News?$format=json&Query=%27#{query}%27&NewsCategory=%27rt_#{category}%27"


    first_fifteen = HTTParty.post(url + "&$skip=0", header)["d"]
    second_fifteen = HTTParty.post(url + "&$skip=15", header)["d"]
    third_fifteen = HTTParty.post(url + "&$skip=30", header)["d"]
    fourth_fifteen = HTTParty.post(url + "&$skip=45", header)["d"]

    responses = first_fifteen.update(second_fifteen) { |key, value1, value2| value1 + value2 }.update(third_fifteen) { |key, value1, value2| value1 + value2 }.update(fourth_fifteen) { |key, value1, value2| value1 + value2 }
  end

  def sort_articles(search_response)
    sources = Source.all
    filtered = []

    search_response.each do |result_obj|
      news_source = result_obj["Source"]

      sources.each do |source|
        if news_source.include?(source.keyword)
          result_obj["ideological_score"] = source.ideological_score
          filtered << result_obj
        end
      end

    end

    sorted = filtered.sort_by { |hash| hash["ideological_score"] }
  end

  def bing_image(query)
    query = query.gsub(" ", "+")

    header = {:headers => {'Authorization' => 'Basic Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ=' }}
    url = "https://api.datamarket.azure.com/Bing/Search/v1/Image?Query=%27#{query}%27&Adult=%27Strict%27"

    image = HTTParty.post(url, header)
  end

  def bing_spelling(query)
    query = query.gsub(" ", "+")

    header = {:headers => {'Authorization' => 'Basic Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ=' }}
    url = "https://api.datamarket.azure.com/Bing/Search/v1/SpellingSuggestions?Query=%27#{query}%27&Adult=%27Strict%27"

    spelling = HTTParty.post(url, header)
  end

end
