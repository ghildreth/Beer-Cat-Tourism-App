class ToursController < ApplicationController
  def index
    @tours = Tour.all
    render json: @tours
  end
end
