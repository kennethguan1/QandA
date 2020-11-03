@questions.each do |question|
  json.set! question.id do
    json.partial! 'question', question: question 
    json.author question.author, :username
    json.comments question.comments, :body
  end
end