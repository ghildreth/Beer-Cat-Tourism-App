class TourBrewery < ApplicationRecord
  belongs_to :tour
  belongs_to :brewery
end
