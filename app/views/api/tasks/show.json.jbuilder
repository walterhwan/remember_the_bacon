json.extract! @task, :id, :list_id, :description, :estimate, :completed
json.updated_at @task.updated_at.to_formatted_s(:number).to_i
