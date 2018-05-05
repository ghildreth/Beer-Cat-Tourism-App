class UserToursController < ApplicationController
  def index
    @user_tours = UserTour.all
    render json: @user_tours
  end
end
