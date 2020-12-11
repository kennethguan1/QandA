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
hobbyUser = User.create(username: "hobby_user", email: "hobby@user.com", password: "343434")
opinionatedUser = User.create(username: "opinionated_user", email: "opinionated@user.com", password: "565656")
npcUser = User.create(username: "npc_user", email: "npc@user.com", password: "111111")





question1 = Question.create(title: "Which came first? Chicken or the egg?", body: "Or maybe ducks.", author_id: demoUser.id)
question2 = Question.create(title: "Where can I learn more about plexy glass?", body: "I already tried the library.", author_id: happyUser.id)
question3 = Question.create(title: "Are raisins safe to eat?", body: "My friend's uncle's nanny told me about toxins.", author_id: curiousUser.id)
question4 = Question.create(title: "Is corn oil healther than canola oil?", body: "There is a buy 2 get 1 free for corn oil at Costco", author_id: demoUser.id)
question5 = Question.create(title: "When is the next stimulus check coming?", body: "I'm going to buy some lottery tickets.", author_id: happyUser.id)
question6 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)
question7 = Question.create(title: "Dogs or cats?" body: "I used to like dogs more, but now I am not sure", author_id: curiousUser.id)
question8 = Question.create(title: "What are people doing in quarantine?", body: "I'm looking for a new hobby.", author_id: curiousUser.id)
question9 = Question.create(title: "Most people who say they like hiking don't actually like hiking.", body: "Prove me wrong.", author_id: curiousUser.id)
question10 = Question.create(title: "Should I go into debt to buy holiday presents?", body: "", author_id: curiousUser.id)
question11 = Question.create(title: "Why does nobody know how to write cursive despite learning it in school?", body: "That includes me.", author_id: curiousUser.id)
question12 = Question.create(title: "What should I do to make myself popular at school?", body: "I already convinced my parents for airpods.", author_id: curiousUser.id)
question13 = Question.create(title: "Whats the best code editor program?", body: "Is it VS code?", author_id: curiousUser.id)
question14 = Question.create(title: "How do I stop all the spam callers???", body: "I'm getting more spam calls than from real people now.", author_id: curiousUser.id)
question15 = Question.create(title: "How do I stop thinking about existentialism?", body: "", author_id: curiousUser.id)
question16 = Question.create(title: "Is social media good or bad for society?", body: "So many people I know are addicted.", author_id: curiousUser.id)
question17 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)
question18 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)
question19 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)
question20 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)
question21 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)
question22 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)
question23 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)
question24 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)








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