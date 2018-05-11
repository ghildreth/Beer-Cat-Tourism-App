class Tour < ApplicationRecord
  has_many :tour_breweries
  has_many :breweries, through: :tour_breweries
  has_many :user_tours
  has_many :users, through: :user_tours
end
