json.partial! "/api/questions/question", question: @question
json.author @question.author, :username
json.comments do
    @question.comments.each do |comment|
        json.set! comment.id do
            json.merge! comment.attributes
            json.author comment.author, :username
        end
    end
end