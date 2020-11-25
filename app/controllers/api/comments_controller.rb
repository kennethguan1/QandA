class Api::CommentsController < ApplicationController

    def new
        @comment = Comment.new
        render json: ["New Comment"]
    end
    
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render json: ["Comment Created"]
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
    def show
        @comment = Comment.find(params[:id])
        if @comment
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render json: ["Comment Updated!"]
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: ["Comment Deleted"]
    end
    
    private
    
    def comment_params
        params.require(:comment).permit(:body, :question_id, :author_id)
    end

end