json.extract! @list, :id, :user_id, :name
json.task_ids @list.tasks.pluck(:id)
json.num_completed @list.tasks.count { |task| task.completed }
json.total_estimated @list.tasks.pluck(:estimate).reject {|el| el.nil?} .reduce(:+)
