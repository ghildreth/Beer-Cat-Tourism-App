class UserController < ApplicationController
    def index
    @userss = User.all
    render json: @users
  end
end
