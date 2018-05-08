Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do
    resources :breweries
    resources :beers
    resources :tours
    get '/users_by_username/:username', to: 'users#by_username'
    resources :users
    resources :user_tours
    resources :tour_breweries
  end
end
