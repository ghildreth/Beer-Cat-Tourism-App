class UserToursController < ApplicationController
  attr_accessor :rating, :user_id, :tour_id

  def index
    @user_tours = UserTour.all
    render json: @user_tours
  end

  def create
    puts params
    puts params[:id]
    puts params[:user_tours]
    puts params[:tour_id]
    puts params[:user_id]

    @user_tour = UserTour.new(user_tour_params)
    @user_tour.save!
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

  def user_tour_params
      params.require(:user_tours).permit(:user_id, :tour_id)
  end

end

  # def create
  #   user = User.new(user_params)
  #   if user.save
  #     session[:user_id] = user.id
  #     render status: 201, json: user
  #   else
  #     render status: 403, json: user.errors.full_messages
  #   end
  # end
