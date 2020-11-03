# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do

Comment.destroy_all
Question.destroy_all
User.destroy_all

demoUser = User.create(username: "demo_user", email: "demo@demo.com", password: "123456")
happyUser = User.create(username: "happy_user", email: "happy@user.com", password: "654321")
curiousUser = User.create(username: "curious_user", email: "curious@user.com", password: "121212")

question1 = Question.create(title: "Which came first? Chicken or the egg?", body: "Or maybe ducks.", author_id: demoUser.id)
question2 = Question.create(title: "Where can I learn more about plexy glass?", body: "I already tried the library.", author_id: happyUser.id)
question3 = Question.create(title: "Are raisins safe to eat?", body: "My friend's uncle's nanny told me about toxins.", author_id: curiousUser.id)

comment1 = Comment.create(body: "Chicken because C comes before D and E", author_id: demoUser.id, question_id: question1.id)

end