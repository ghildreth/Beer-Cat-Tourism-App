class ToursController < ApplicationController
  def mine
    if current_user.nil?
      render status: 401, json: nil
    else
      render json: {tours: current_user.tours, user_tours: current_user.user_tours}
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
