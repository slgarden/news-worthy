enable :sessions

get '/' do
  erb :index
end

post '/articles' do
  search_response = # request call to api here
  content_type :json
  search_response.to_json
end


