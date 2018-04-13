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

# demo2 = User.create!(username: 'demo2', password: 'demodemo', email: 'demo2@gmail.com', last_name: 'Olivaw', first_name: 'Daneel')

(1..20).each do |n|
  demo = User.create!(username: "demo#{n}", password: 'demodemo', email: "demo#{n}@gmail.com", last_name: 'Asimov', first_name: 'Isaac')

  work = List.create!(user_id: demo.id, name: 'Work')
  personal = List.create!(user_id: demo.id, name: 'Personal')
  family = List.create!(user_id: demo.id, name: 'Family')
  apartment = List.create!(user_id: demo.id, name: 'Apartment')
  programming = List.create!(user_id: demo.id, name: 'Programming')
  movie = List.create!(user_id: demo.id, name: 'TV/Movie to watch')

  # Seed work list
  Task.create!(list_id: work.id, description: 'Task edit', due_date: nil, estimate: 45, completed: false)
  Task.create!(list_id: work.id, description: 'Task create', due_date: nil, estimate: 30, completed: false)
  Task.create!(list_id: work.id, description: 'Task destroy', due_date: nil, estimate: 120, completed: false)
  Task.create!(list_id: work.id, description: 'List edit', due_date: nil, estimate: 45, completed: true)
  Task.create!(list_id: work.id, description: 'List create', due_date: nil, estimate: 30, completed: true)
  Task.create!(list_id: work.id, description: 'List destroy', due_date: nil, estimate: 120, completed: true)
  Task.create!(list_id: work.id, description: 'Fix rename list', due_date: nil, estimate: nil, completed: false)
  Task.create!(list_id: work.id, description: 'When user logged in they don\'t have a list', due_date: nil, estimate: nil, completed: false)
  Task.create!(list_id: work.id, description: 'Fix adding a empty task', due_date: nil, estimate: nil, completed: false)
  Task.create!(list_id: work.id, description: 'Remember to bring HDMI cable for second screen', due_date: nil, estimate: nil, completed: false)

  # Personal list
  Task.create!(list_id: personal.id, description: 'Grocery shopping', due_date: nil, estimate: 30, completed: false)
  Task.create!(list_id: personal.id, description: 'Annual Dental Appointment', due_date: nil, estimate: nil, completed: false)
  Task.create!(list_id: personal.id, description: 'Buy ticket back home', due_date: nil, estimate: nil, completed: false)
  Task.create!(list_id: personal.id, description: 'Car Maintenance', due_date: nil, estimate: 120, completed: true)

  Task.create!(list_id: personal.id, description: 'Learn Ruby', due_date: nil, estimate: nil, completed: true)
  Task.create!(list_id: personal.id, description: 'Learn SQL', due_date: nil, estimate: nil, completed: true)
  Task.create!(list_id: personal.id, description: 'Learn Rails Active Record', due_date: nil, estimate: nil, completed: true)
  Task.create!(list_id: personal.id, description: 'Learn Javascript', due_date: nil, estimate: nil, completed: true)
  Task.create!(list_id: personal.id, description: 'Hair cut', due_date: nil, estimate: 30, completed: true)
  Task.create!(list_id: personal.id, description: 'Buy shoe storage rack', due_date: nil, estimate: 60, completed: true)


  # Show to watch
  Task.create!(list_id: movie.id, description: 'Dr. Strangelove', due_date: nil, estimate: 90, completed: false)
  Task.create!(list_id: movie.id, description: 'Fahrenheit 451', due_date: nil, estimate: 90, completed: false)
  Task.create!(list_id: movie.id, description: 'Isle of Dogs', due_date: nil, estimate: 90, completed: false)
  Task.create!(list_id: movie.id, description: 'A Quite Place', due_date: nil, estimate: 90, completed: false)
  Task.create!(list_id: movie.id, description: 'Westword Season 2', due_date: nil, estimate: 90, completed: false)
  Task.create!(list_id: movie.id, description: 'The Post', due_date: nil, estimate: 90, completed: false)

  Task.create!(list_id: movie.id, description: 'Baby Driver', due_date: nil, estimate: 90, completed: true)
  Task.create!(list_id: movie.id, description: 'Dunkirk', due_date: nil, estimate: 90, completed: true)
  Task.create!(list_id: movie.id, description: 'Wonder Woman', due_date: nil, estimate: 90, completed: true)
  Task.create!(list_id: movie.id, description: 'Logan', due_date: nil, estimate: 90, completed: true)
  Task.create!(list_id: movie.id, description: 'Watchman', due_date: nil, estimate: 90, completed: true)
  Task.create!(list_id: movie.id, description: 'Ex Machina', due_date: nil, estimate: 90, completed: true)


  # Apartment task list
  Task.create!(list_id: apartment.id, description: 'Taking out recycles', due_date: nil, estimate: 2, completed: false)
  Task.create!(list_id: apartment.id, description: 'Vacuum the carpet', due_date: nil, estimate: 20, completed: false)
  Task.create!(list_id: apartment.id, description: 'Costco shopping', due_date: nil, estimate: 90, completed: true)
  Task.create!(list_id: apartment.id, description: 'Clean dishwashing', due_date: nil, estimate: 30, completed: false)

  # programming task list
  (1..50).each do
    Task.create!(list_id: programming.id, description: Faker::Hacker.say_something_smart[0...-1], due_date: nil, estimate: 5, completed: false)
  end
  (1..50).each do
    Task.create!(list_id: programming.id, description: Faker::Hacker.say_something_smart[0...-1], due_date: nil, estimate: 5, completed: true)
  end
end





# Landing page pictures
#
# Add more fields to task details like 'list'
#
# making multiple demo accounts
#
# Show name of the list on top left
#
# Show list incomplete total on list index
#
# Improve search relevance
#
# Seed the database
