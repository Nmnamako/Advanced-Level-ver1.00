Rails.application.routes.draw do
  get 'lists/new'
  get 'lists/edit'
  
  post 'lists' => 'lists#create'
  
  get '/top' => "homes#top"
  get 'lists/index' => "lists#index"
  get 'lists/:id' => "lists#show", as: "list"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
