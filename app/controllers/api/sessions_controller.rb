class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Username or password invalid']
    else
      log_in(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user.nil?
      render json: ['No current user to log out']
    else
      log_out
      render json: {}
    end
  end
end
