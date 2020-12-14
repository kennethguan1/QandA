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
Reply.destroy_all

demoUser = User.create(username: "demo_user", email: "demo@demo.com", password: "123456")
happyUser = User.create(username: "happy_user", email: "happy@user.com", password: "654321")
curiousUser = User.create(username: "curious_user", email: "curious@user.com", password: "121212")
hobbyUser = User.create(username: "hobby_user", email: "hobby@user.com", password: "343434")
opinionatedUser = User.create(username: "opinionated_user", email: "opinionated@user.com", password: "565656")
npcUser = User.create(username: "npc_user", email: "npc@user.com", password: "111111")
inactiveUser = User.create(username: "inactive_user", email: "inactive@user.com", password: "010011")
topUser = User.create(username: "top_user", email: "top@user.com", password: "987654321")


question1 = Question.create(title: "Which came first? Chicken or the egg?", body: "Or maybe ducks.", author_id: demoUser.id)
question2 = Question.create(title: "Where can I learn more about plexy glass?", body: "I already tried the library.", author_id: happyUser.id)
question3 = Question.create(title: "Are raisins safe to eat?", body: "My friend's uncle's nanny told me about toxins.", author_id: curiousUser.id)
question4 = Question.create(title: "Is corn oil healther than canola oil?", body: "There is a buy 2 get 1 free for corn oil at Costco", author_id: demoUser.id)
question5 = Question.create(title: "When is the next stimulus check coming?", body: "I'm going to buy some lottery tickets.", author_id: happyUser.id)
question6 = Question.create(title: "How long can you survive with just water?", body: "I'm on a diet.", author_id: curiousUser.id)
question7 = Question.create(title: "Dogs or cats?", body: "I used to like dogs more, but now I am not sure", author_id: hobbyUser.id)
question8 = Question.create(title: "What are people doing in quarantine?", body: "I'm looking for a new hobby.", author_id: npcUser.id)
question9 = Question.create(title: "Most people who say they like hiking don't actually like hiking.", body: "Prove me wrong.", author_id: opinionatedUser.id)
question10 = Question.create(title: "Should I go into debt to buy holiday presents?", body: "", author_id: hobbyUser.id)
question11 = Question.create(title: "Why does nobody know how to write cursive despite learning it in school?", body: "That includes me.", author_id: opinionatedUser.id)
question12 = Question.create(title: "What should I do to make myself popular at school?", body: "I already convinced my parents for airpods.", author_id: npcUser.id)
question13 = Question.create(title: "Whats the best code editor program?", body: "Is it VS code?", author_id: demoUser.id)
question14 = Question.create(title: "How do I stop all the spam callers???", body: "I'm getting more spam calls than from real people now.", author_id: happyUser.id)
question15 = Question.create(title: "How do I stop thinking about existentialism?", body: "", author_id: curiousUser.id)
question16 = Question.create(title: "Is social media good or bad for society?", body: "So many people I know are addicted.", author_id: hobbyUser.id)
question17 = Question.create(title: "Am I the only one that likes the quarantine?", body: "Don't have to get into a shouting match with relatives again this year.", author_id: opinionatedUser.id)
question18 = Question.create(title: "Why is everything that I want sold out?", body: "", author_id: npcUser.id)
question19 = Question.create(title: "Who was the boss in the 1984 sitcom 'Who's the boss?'", body: "This is not a rhetorical question", author_id: demoUser.id)
question20 = Question.create(title: "I keep going over the data cap now that I'm working at home", body: "How do we change ISPs from imposing a data cap?", author_id: happyUser.id)
question21 = Question.create(title: "Which countries give more rights to great apes?", body: "Such as gorillas, chimpanzees, etc.", author_id: curiousUser.id)
question22 = Question.create(title: "I am obsessed with decluttering and minimalism and its stressing me out. What should I do?", body: "I thought minimalism is supposed to help me de-stress.", author_id: hobbyUser.id)
question23 = Question.create(title: "Why do I feel nostalgic for a time I never lived in?", body: "I'm talking about the 80s.", author_id: hobbyUser.id)
question24 = Question.create(title: "What intellectual property will Disney purchase next?", body: "", author_id: npcUser.id)

comment1 = Comment.create(body: "Anyone know? I need to know asap", author_id: demoUser.id, question_id: question1.id)
comment2 = Comment.create(body: "Ducks because they can fly.", author_id: happyUser.id, question_id: question1.id)
comment3 = Comment.create(body: "Eggs because there were eggs before there were chickens.", author_id: curiousUser.id, question_id: question1.id)
comment4 = Comment.create(body: "Nvm the sale is over.", author_id: demoUser.id, question_id: question4.id)
comment5 = Comment.create(body: "Where was this sale?", author_id: happyUser.id, question_id: question4.id)
comment6 = Comment.create(body: "Did you ever find out?", author_id: curiousUser.id, question_id: question4.id)
comment7 = Comment.create(body: "Try QandA!", author_id: demoUser.id, question_id: question2.id)
comment8 = Comment.create(body: "Raisins are just grapes with more personality.", author_id: happyUser.id, question_id: question3.id)
comment9 = Comment.create(body: "I've got a great opportunity for you! Are you interested?", author_id: curiousUser.id, question_id: question5.id)
comment10 = Comment.create(body: "Why don't you try this and let us know? :)", author_id: opinionatedUser.id, question_id: question6.id)
comment11 = Comment.create(body: "Guilty as charged. I only go hiking once every 2 months haha.", author_id: happyUser.id, question_id: question9.id)
comment12 = Comment.create(body: "I climbed mount Everest so doesn't apply to me!", author_id: inactiveUser.id, question_id: question9.id)
comment13 = Comment.create(body: "Austria bans all great ape experimentation.", author_id: topUser.id, question_id: question21.id)
comment14 = Comment.create(body: "Just enjoy your time on earth as an experience.", author_id: npcUser.id, question_id: question15.id)
comment15 = Comment.create(body: "Angela", author_id: hobbyUser.id, question_id: question19.id)
comment16 = Comment.create(body: "Take a step back and remember that you don't need to get rid of everything right away. It can take months and thats is okay.", author_id: curiousUser.id, question_id: question22.id)
comment17 = Comment.create(body: "Really recommend you read Mary Kondo's book.", author_id: demoUser.id, question_id: question22.id)
comment18 = Comment.create(body: "I think Harry Potter, but I hope it doesn't happen!", author_id: hobbyUser.id, question_id: question24.id)
comment19 = Comment.create(body: "It's the holiday season silly.", author_id: happyUser.id, question_id: question18.id)
comment20 = Comment.create(body: "Maybe you just have no friends?!", author_id: opinionatedUser.id, question_id: question14.id)
comment21 = Comment.create(body: "Ignore them. Don't answer or it will get worse.", author_id: topUser.id, question_id: question14.id)
comment22 = Comment.create(body: "Answering questions on QandA.", author_id: opinionatedUser.id, question_id: question8.id)
comment23 = Comment.create(body: "Only you can find yourself a hobby. Now is the time to hone your skills or find your passion.", author_id: topUser.id, question_id: question8.id)
comment24 = Comment.create(body: "You can try buying other people airpods.", author_id: opinionatedUser.id, question_id: question12.id)
comment25 = Comment.create(body: "Why is it stressing you out anyway?", author_id: curiousUser.id, question_id: question22.id)
comment26 = Comment.create(body: "Just like everything else, too much of something is bad for you. But used it moderation it can be great and fulfilling.", author_id: topUser.id, question_id: question16.id)
comment27 = Comment.create(body: "Social media allows people who otherwise may not have a voice through traditional channels to establish their personal following, brands, and content so overall I think its good.", author_id: demoUser.id, question_id: question16.id)
comment28 = Comment.create(body: "No I don't like it. It needs to be banned!", author_id: opinionatedUser.id, question_id: question16.id)
comment29 = Comment.create(body: "The 80s are making a comeback, but they totally skipped over the 70s LOL.", author_id: topUser.id, question_id: question23.id)



like1= Like.create(author_id: demoUser.id, comment_id: comment3.id)
like2= Like.create(author_id: happyUser.id, comment_id: comment7.id)
like3= Like.create(author_id: happyUser.id, comment_id: comment29.id)
like4= Like.create(author_id: npcUser.id, comment_id: comment29.id)
like5= Like.create(author_id: hobbyUser.id, comment_id: comment29.id)
like6= Like.create(author_id: npcUser.id, comment_id: comment20.id)
like7= Like.create(author_id: inactiveUser.id, comment_id: comment19.id)
like8= Like.create(author_id: curiousUser.id, comment_id: comment8.id)
like9= Like.create(author_id: hobbyUser.id, comment_id: comment26.id)
like10= Like.create(author_id: happyUser.id, comment_id: comment26.id)
like11= Like.create(author_id: demoUser.id, comment_id: comment26.id)
like12= Like.create(author_id: npcUser.id, comment_id: comment27.id)
like13= Like.create(author_id: topUser.id, comment_id: comment27.id)
like14= Like.create(author_id: inactiveUser.id, comment_id: comment28.id)
like15= Like.create(author_id: hobbyUser.id, comment_id: comment16.id)
like16= Like.create(author_id: curiousUser.id, comment_id: comment24.id)
like17= Like.create(author_id: npcUser.id, comment_id: comment23.id)
like18= Like.create(author_id: happyUser.id, comment_id: comment23.id)


reply1 = Reply.create(body: "Hey! That was not cool. :(", author_id: happyUser.id, comment_id: comment20.id)
reply2 = Reply.create(body: "80s is cooler. ;)", author_id: happyUser.id, comment_id: comment29.id)
reply3 = Reply.create(body: "Wow do you have pictures?", author_id: topUser.id, comment_id: comment12.id)
reply4 = Reply.create(body: "Thats true. I will try.", author_id: npcUser.id, comment_id: comment23.id)
reply5 = Reply.create(body: "Wow I'm already doing that so I'm ahead of the curve!", author_id: curiousUser.id, comment_id: comment22.id)
reply6 = Reply.create(body: "How do I get started on my personal brand?", author_id: curiousUser.id, comment_id: comment27.id)
reply7 = Reply.create(body: "Seriously needs more details.", author_id: topUser.id, comment_id: comment25.id)
reply8 = Reply.create(body: "Agreed.", author_id: demoUser.id, comment_id: comment18.id)
reply9 = Reply.create(body: "Never saw it that way. :o", author_id: npcUser.id, comment_id: comment8.id)
reply10 = Reply.create(body: "70s is cool too. It has disco haha", author_id: topUser.id, comment_id: comment29.id)

end