class SessionsController < ApplicationController
  def create
    user = User.find_by(username: user_params[:username])
    
    if user && user.authenticate(user_params[:password])
      session[:user_id] = user.id
    else
      render status: 401
    end
  end

  def destroy
    reset_session
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
