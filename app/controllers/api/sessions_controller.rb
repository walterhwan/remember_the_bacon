class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['invalid credentials'], status: 422
    else
      log_in(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user.nil?
      render json: ['No current user to log out'], status: 404
    else
      log_out
      render json: {}
    end
  end
end
