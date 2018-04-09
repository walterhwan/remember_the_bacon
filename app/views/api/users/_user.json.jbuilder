json.extract! user, :id, :username, :email, :last_name, :first_name
json.list_ids user.lists.pluck(:id)
