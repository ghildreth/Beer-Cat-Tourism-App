class SessionsController < ApplicationController
  def create
    user = User.find_by(email: user_params[:email])
    
    render status: 404 and return unless user

    if user.authenticate(user_params[:password])
      session[:user_id] = user.id
      render status: 201, json: user
    else
      render status: 403
    end
  end

  def destroy
    reset_session
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
