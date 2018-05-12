class UserToursController < ApplicationController
  attr_accessor :rating
  def index
    @user_tours = UserTour.all
    render json: @user_tours
  end

  def update
    puts params[:id]
    puts params[:user_tours][:rating]
    user_tour = UserTour.find(params[:id])
    user_tour.rating = params[:user_tours][:rating]
    user_tour.save!
    puts "print updated user tour"
    puts user_tour.inspect
    render json: user_tour
  end

  private
  def user_tour_id
    params.require(:user_tour).permit(:rating)
  end

end
