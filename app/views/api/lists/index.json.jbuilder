@lists.each do |list|
  json.set! list.id do
    json.extract! list, :id, :user_id, :name
  end
end
