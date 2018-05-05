class TourBreweriesController < ApplicationController
  def index
    @tour_breweries = Tour_Brewery.all
    render json: @tour_breweries
  end
end
