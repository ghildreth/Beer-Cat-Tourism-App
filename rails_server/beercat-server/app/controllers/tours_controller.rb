class ToursController < ApplicationController
  def index
    @tours = Tour.all
    render json: @tours, include: :breweries
  end

  def show
    @tour = Tour.find(params[:id])
    render json: @tour, include: :breweries
  end
end
