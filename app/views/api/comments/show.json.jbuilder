json.merge! @comment.attributes
json.author @comment.author, :username
json.replies do
    @comment.replies.each do |reply|
        json.set! reply.id do
            json.merge! reply.attributes
            json.author reply.author, :username
        end
    end
end