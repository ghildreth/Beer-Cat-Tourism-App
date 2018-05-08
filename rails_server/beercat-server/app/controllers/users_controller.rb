class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def by_username
    @username = params[:username]
    @user = User.find_by(username: @username)
    render json: @user
  end

  private

    def user_params
      params.require(:user).permit(:name,
                                  :email,
                                  :username,
                                  :password,
                                  :password_confirmation,
                                  :preference_ABV,
                                  :preference_SRM,
                                  :preference_IBU,
                                  :preference_adventurous,
                                  :preference_sour
                                  )
  end
end
