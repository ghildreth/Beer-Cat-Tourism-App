  class UsersController < ApplicationController
    def index
      @users = User.order("created_at DESC")
      render json: @users
    end

    def create
      @user = User.create(user_param)
      render json: @user
    end

    private

      def user_param
        params.require(:user).permit(:name,
                                    :email,
                                    :username,
                                    :password_hash,
                                    :preference_ABV,
                                    :preference_SRM,
                                    :perference_IBU,
                                    :perference_adventurous,
                                    :prefereence_sour
                                    )
    end
end
