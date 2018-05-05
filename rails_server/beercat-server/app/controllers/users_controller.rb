class UsersController < ApplicationController
<<<<<<< HEAD:rails_server/beercat-server/app/controllers/users_controller.rb
    def index
=======
  def index
>>>>>>> feature/build-components:rails_server/beercat-server/app/controllers/user_controller.rb
    @users = User.all
    render json: @users
  end
end
