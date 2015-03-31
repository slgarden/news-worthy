enable :sessions

get '/' do
  erb :index
end

post '/articles' do
  search_response = bing(params[:query], params[:category])
  filtered = sort_articles(search_response["results"])

  content_type :json
  filtered.to_json
end


