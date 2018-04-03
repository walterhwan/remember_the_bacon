class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username or password'], status: 422
    end
  end

  def destory
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :last_name, :first_name)
  end
end
