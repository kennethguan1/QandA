json.merge! @question.attributes
json.author @question.author, :username
json.comments do
    @question.comments.each do |comment|
        json.set! comment.id do
            json.merge! comment.attributes
            json.author comment.author, :username
            json.set! :likers do
                json.array! comment.likes.pluck(:author_id)
            end
        end
    end
end