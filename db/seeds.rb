# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.all.destroy_all
List.all.destroy_all
Task.all.destroy_all

demo = User.create!(username: 'demo', password: 'demodemo', email: 'demo@gmail.com', last_name: 'Asimov', first_name: 'Isaac')
demo2 = User.create!(username: 'demo2', password: 'demodemo', email: 'demo2@gmail.com', last_name: 'Olivaw', first_name: 'Daneel')

work = List.create!(user_id: demo.id, name: 'Work')
personal = List.create!(user_id: demo.id, name: 'Personal')
family = List.create!(user_id: demo.id, name: 'Family')
gaming = List.create!(user_id: demo.id, name: 'Gaming')
other = List.create!(user_id: demo.id, name: 'Other')
movie = List.create!(user_id: demo.id, name: 'Movie to Watch')

list21 = List.create!(user_id: demo2.id, name: 'Personal')

# Seed work list
Task.create!(list_id: work.id, description: 'Task edit', due_date: nil, estimate: 45, completed: false)
Task.create!(list_id: work.id, description: 'Task create', due_date: nil, estimate: 30, completed: false)
Task.create!(list_id: work.id, description: 'Task destroy', due_date: nil, estimate: 120, completed: false)
Task.create!(list_id: work.id, description: 'List edit', due_date: nil, estimate: 45, completed: true)
Task.create!(list_id: work.id, description: 'List create', due_date: nil, estimate: 30, completed: true)
Task.create!(list_id: work.id, description: 'List destroy', due_date: nil, estimate: 120, completed: true)
Task.create!(list_id: work.id, description: 'Fix rename list', due_date: nil, estimate: 0, completed: false)
Task.create!(list_id: work.id, description: 'When user logged in they don\'t have a list', due_date: nil, estimate: 0, completed: false)
Task.create!(list_id: work.id, description: 'Fix adding a empty task', due_date: nil, estimate: 0, completed: false)
Task.create!(list_id: work.id, description: 'Remember to bring HDMI cable for the screen', due_date: nil, estimate: nil, completed: false)

task3 = Task.create!(list_id: list2.id, description: 'Remember to act like human', due_date: nil, estimate: nil, completed: true)


# Task edit (need to add auto submit)
# Task details (add more fields?)
# Fix rename list
# When user logged in they don't have a list
# Fix adding a empty task
# Task mark complete
# Fix delete option button where it will appear when its parent was clicked
# Task select check box (and select only one)
# clean selectedTaskIds when switching lists


# Landing page pictures and transition effect
# Add due date?
# Task complete check complete button
# Fix list overflow problem
# Estimated time (update when task changed)
