
get '/' do
  erb :index
end

post '/articles' do
  search_response = bing(params[:query], params[:category])
  articles = sort_articles(search_response["results"])

  content_type :json
  articles.to_json
end


