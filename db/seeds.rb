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
Like.destroy_all

demoUser = User.create(username: "demo_user", email: "demo@demo.com", password: "123456")
happyUser = User.create(username: "happy_user", email: "happy@user.com", password: "654321")
curiousUser = User.create(username: "curious_user", email: "curious@user.com", password: "121212")

question1 = Question.create(title: "Which came first? Chicken or the egg?", body: "Or maybe ducks.", author_id: demoUser.id)
question2 = Question.create(title: "Where can I learn more about plexy glass?", body: "I already tried the library.", author_id: happyUser.id)
question3 = Question.create(title: "Are raisins safe to eat?", body: "My friend's uncle's nanny told me about toxins.", author_id: curiousUser.id)
question4 = Question.create(title: "Is corn oil healther than canola oil?", body: "There is a buy 2 get 1 free for corn oil at Costco", author_id: demoUser.id)
question5 = Question.create(title: "When is the next stimulus check coming?", body: "I'm going to buy some lottery tickets.", author_id: happyUser.id)
question6 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)

comment1 = Comment.create(body: "Anyone know? I need to know asap", author_id: demoUser.id, question_id: question1.id)
comment2 = Comment.create(body: "Ducks because they can fly.", author_id: happyUser.id, question_id: question1.id)
comment3 = Comment.create(body: "Eggs because there were eggs before there were chickens.", author_id: curiousUser.id, question_id: question1.id)
comment4 = Comment.create(body: "Nvm the sale is over.", author_id: demoUser.id, question_id: question4.id)
comment5 = Comment.create(body: "Where was this sale?", author_id: happyUser.id, question_id: question4.id)
comment6 = Comment.create(body: "Did you ever find out?", author_id: curiousUser.id, question_id: question4.id)
comment7 = Comment.create(body: "Try QandA!", author_id: demoUser.id, question_id: question2.id)
comment8 = Comment.create(body: "Raisins are just grapes with more personality.", author_id: happyUser.id, question_id: question3.id)
comment9 = Comment.create(body: "I've got a great opportunity for you! Are you interested?", author_id: curiousUser.id, question_id: question5.id)

# like1= Like.create(author_id: demoUser.id, comment_id: comment1.id)
# like2= Like.create(author_id: happyUser.id, comment_id: comment1.id)

end