enable :sessions

get '/' do
  erb :index
end

post '/articles' do

  content_type :json

end


