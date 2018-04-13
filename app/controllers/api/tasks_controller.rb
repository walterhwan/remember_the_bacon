class Api::TasksController < ApplicationController
  before_action :require_logged_in

  def search
    most_relevant = current_user.tasks.where("lower(description) LIKE ?", "#{params['search_term']}%").all

    less_relevant = current_user.tasks.where("lower(description) LIKE ?", "%#{params['search_term']}%").where("lower(description) NOT LIKE ?", "#{params['search_term']}%").all

    # TODO: improve search
    @tasks = less_relevant + most_relevant #.sort_by(&:created_at)
    render :index
  end

  def index
    if params[:list_id]
      @tasks = current_user.tasks.where(list_id: params[:list_id]).order(updated_at: :desc)
    else
      @tasks = current_user.tasks.order(updated_at: :desc)
    end
    render :index
  end

  def show
    @task = current_user.tasks.find_by(id: params[:id])
    render :show
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render :show
    else
      render json: ['Create task failed. Some entry cannot be empty']
    end
  end

  def update
    @task = current_user.tasks.find_by(id: params[:id])

    if @task.update_attributes(task_params)
      render :show
    else
      render json: ['Update task failed. Some entry cannot be empty']
    end
  end

  def destroy
    @task = current_user.tasks.find_by(id: params[:id])
    @task.destroy
    render :show
  end

  private

  def task_params
    params.require(:task).permit(:list_id, :description, :due_date, :estimate, :completed)
  end
end
