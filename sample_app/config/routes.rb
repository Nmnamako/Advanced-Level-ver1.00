Rails.application.routes.draw do
  get 'lists/new'
  get 'lists/show'
  get 'lists/edit'
  
  post 'lists' => 'lists#create'
  
  get '/top' => "homes#top"
  get 'lists/index' => "lists#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
