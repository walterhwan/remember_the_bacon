class Api::ListsController < ApplicationController
  def index
    @lists = current_user.lists
    render :index
  end

  def show
    @list = current_user.lists.find_by(id: params[:id])
    render :show
  end

  def create
    @list = List.new(list_params)
    @list.user_id = current_user.id;

    if @list.save
      render :show
    else
      render json: ['Create list failed. Name cannot be empty']
    end
  end

  def update
    @list = current_user.lists.find_by(id: params[:id])

    if @list.update_attributes(list_params)
      render :show
    else
      render json: ['Update list failed. Some entry cannot be empty']
    end
  end

  def destory
    @list = current_user.lists.find_by(id: params[:id])
    render json: {}
  end

  private

  def list_params
    params.require(:list).permit(:user_id, :name)
  end
end
