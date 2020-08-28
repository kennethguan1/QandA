# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "user1", email: "user1.com", password: "123456")

Question.create(title: 'Which came first? Chicken or the egg?', body: 'Or maybe ducks.', author_id: '14')
Question.create(title: 'Where can I learn more about plexy glass?', body: 'I already tried the library.', author_id: '14')
Question.create(title: 'Are raisins safe to eat?', body: 'I read about toxins on facebook.', author_id: '14')