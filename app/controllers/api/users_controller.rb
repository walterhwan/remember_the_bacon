class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      # Create initial lists
      List.create!(user_id: @user.id, name: 'Work')
      List.create!(user_id: @user.id, name: 'Personal')
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :last_name, :first_name)
  end
end
