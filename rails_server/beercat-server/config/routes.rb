Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do
    resources :breweries
    resources :beers
    resources :tours
    resources :users
    resources :user_tours
  end
end
