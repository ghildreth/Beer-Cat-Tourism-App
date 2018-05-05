class UserToursController < ApplicationController
  def index
    @user_tours = User_tour.all
    render json: @user_tours
  end
end
