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

list1 = List.create!(user_id: demo.id, name: 'Work')
list2 = List.create!(user_id: demo.id, name: 'Personal')
list3 = List.create!(user_id: demo.id, name: 'Family')
list4 = List.create!(user_id: demo.id, name: 'Gaming')
list5 = List.create!(user_id: demo.id, name: 'Other')
list21 = List.create!(user_id: demo2.id, name: 'Personal')


task1 = Task.create!(list_id: list1.id, description: 'take out trash', due_date: nil, estimate: 5, completed: false)
task2 = Task.create!(list_id: list1.id, description: 'read js books', due_date: nil, estimate: 240, completed: false)
task3 = Task.create!(list_id: list1.id, description: 'Remember to bring HDMI cable for the screen', due_date: nil, estimate: nil, completed: false)

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
