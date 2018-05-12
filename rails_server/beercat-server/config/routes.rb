Rails.application.routes.draw do
  scope :api do
    resources :breweries
    resources :beers
    resources :tours
    get '/users_by_username/:username', to: 'users#by_username'
    get '/users/me', to: 'users#me'
    resources :users
    resources :user_tours
    resources :tour_breweries
    resources :sessions, only: [:create]
    delete '/sessions', to: 'sessions#destroy'

  end
end
