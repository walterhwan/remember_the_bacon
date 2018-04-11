@lists.includes([:tasks])
@lists.each do |list|
  json.set! list.id do
    json.extract! list, :id, :user_id, :name
    json.task_ids list.tasks.pluck(:id)
    json.num_completed list.tasks.count { |task| task.completed }
    json.total_estimated list.tasks.reject {|el| el.estimate.nil? || el.completed} .pluck(:estimate).reduce(:+)
  end
end
