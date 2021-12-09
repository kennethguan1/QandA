class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)            #User has to match class_name from models

        if @user.save
            login(@user)
            render "api/users/show" #or :show  , the default route of the render is based on controller name hence api/users
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/questions/show"
    end
  end
    
    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
    
end