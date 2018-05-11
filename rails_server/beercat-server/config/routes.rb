Rails.application.routes.draw do
  scope :api do
    resources :breweries
    resources :beers
    get '/tours/mine', to: 'tours#mine'
    resources :tours
    get '/users_by_username/:username', to: 'users#by_username'
    post '/users_login/:username/:password', to: 'users#login'
    resources :users
    resources :user_tours
    resources :tour_breweries
    resources :sessions, only: [:create]
    delete '/sessions', to: 'sessions#destroy'
  end
end
