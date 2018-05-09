class Tour < ApplicationRecord
  has_many :tour_breweries
  has_many :breweries, through: :tour_breweries
end
