class ToursController < ApplicationController
  def index
    @tours = Tour.all
    render json: @tours
  end

  def show
    @tour = Tour.find(params[:id])
    render json: @tour
  end
end
