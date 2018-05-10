class UsersController < ApplicationController
  def new
  end
  
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      puts "saved!"
    else
      puts user.errors.full_messages
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def by_username
    username = params[:username]
    user = User.find_by(username: username)
    render json: user
  end

  def login
    username = params[:username]
    password = params[:password]
    user = User.find_by(username: username)
    if user.authenticate(password)
      puts "matches"
      render json: user
    else
      puts "doesn't match"
      render status: 401, json: nil
    end
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
