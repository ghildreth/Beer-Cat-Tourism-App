class TourBreweriesController < ApplicationController
  def index
    @tour_breweries = TourBrewery.all
    render json: @tour_breweries
  end
end
