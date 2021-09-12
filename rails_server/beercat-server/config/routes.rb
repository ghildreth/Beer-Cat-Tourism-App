Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace 'api' do
    get '/maps_js', to: 'maps#library'
    resources :breweries
    resources :beers
    get '/tours/mine', to: 'tours#mine'
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

