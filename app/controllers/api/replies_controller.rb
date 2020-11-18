class Api::RepliesController < ApplicationController

    def new
        @reply = Reply.new
        render json: ["Reply to Comment"]
    end
    
    def create
        @reply = Reply.new(reply_params)
        if @reply.save
            render json: ["Reply Created"]
        else
            render json: @reply.errors.full_messages, status: 422
        end
    end
    
    def update
        @reply = Reply.find(params[:id])
        if @reply.update(reply_params)
            render json: ["Reply Updated!"]
        else
            render json: @reply.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @reply = Reply.find(params[:id])
        @reply.destroy
        render json: ["Reply Deleted"]
    end
    
    private
    
    def reply_params
        params.require(:reply).permit(:body, :comment_id, :author_id)
    end
end
