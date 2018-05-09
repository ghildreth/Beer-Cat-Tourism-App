class BreweriesController < ApplicationController

  def index
    @breweries = Brewery.all
    render json: @breweries
  end

  # def index
  #   breweries = Brewery.search(search_params.to_h.symbolize_keys)
  #   render json: breweries
  # end

  def show
    @brewery = Brewery.find(params[:id])
    render json: @brewery, include: :tours
  end

  # private

  # def search_params
  #   params.permit(:min_lng, :max_lng, :min_lat, :max_lat)
  # end
end


