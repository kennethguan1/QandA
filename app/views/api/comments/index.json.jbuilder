@comments.each do |comment|
  json.set! comment.id do
    json.partial! 'comment', comment: comment 
    json.author question.author, :username
  end
end