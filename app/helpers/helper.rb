require 'httparty'

helpers do

  include HTTParty

  def bing(query, category)
    query = query.gsub(" ", "+")
    first_fifteen = HTTParty.post("https://api.datamarket.azure.com/Bing/Search/v1/News?$format=json&Query=%27#{query}%27&NewsCategory=%27rt_#{category}%27&$skip=0",
    :headers => {'Authorization' => 'Basic Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ=' } )

    second_fifteen = HTTParty.post("https://api.datamarket.azure.com/Bing/Search/v1/News?$format=json&Query=%27#{query}%27&NewsCategory=%27rt_#{category}%27&$skip=15",
    :headers => {'Authorization' => 'Basic Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ=' } )

    third_fifteen = HTTParty.post("https://api.datamarket.azure.com/Bing/Search/v1/News?$format=json&Query=%27#{query}%27&NewsCategory=%27rt_#{category}%27&$skip=30",
    :headers => {'Authorization' => 'Basic Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ=' } )

    fourth_fifteen = HTTParty.post("https://api.datamarket.azure.com/Bing/Search/v1/News?$format=json&Query=%27#{query}%27&NewsCategory=%27rt_#{category}%27&$skip=45",
    :headers => {'Authorization' => 'Basic Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ=' } )

    responses = first_fifteen["d"].update(second_fifteen["d"]) { |key, value1, value2| value1 + value2 }.update(third_fifteen["d"]) { |key, value1, value2| value1 + value2 }.update(fourth_fifteen["d"]) { |key, value1, value2| value1 + value2 }
  end

  def sort_articles(search_response)
    sources = Source.all
    filtered = []

    search_response.each do |result_obj|
      news_source = result_obj["Source"]

      sources.each do |source|
        if news_source.include?(source.keyword)
          result_obj["liberal_score"] = source.liberal_score
          filtered << result_obj
        end
      end

    end
    sorted = filtered.sort_by { |hash| hash["liberal_score"] }.reverse
  end

end
