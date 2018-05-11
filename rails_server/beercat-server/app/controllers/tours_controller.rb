class ToursController < ApplicationController
  def mine
    if current_user.nil?
      render status: 401, json: nil
    else
      render json: current_user.tours
    end
  end


  def index
    @tours = Tour.all
    render json: @tours, include: :breweries
  end

  def show
    @tour = Tour.find(params[:id])
    render json: @tour, include: :breweries
  end
end
