require 'sinatra'

configure {
    set :server, :puma
    set :public_folder, File.dirname(__FILE__) + '/public'
    set :views, settings.root + '/views'
    set :base_url, 'http://localhost:2000/'
}

get '/' do
    erb :index, :layout => :'layouts/blank'
end
