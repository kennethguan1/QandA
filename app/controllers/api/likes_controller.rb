class Api::LikesController < ApplicationController

    def create
        @like = Like.new()
        @like.comment_id = params[:commentId]
        @like.author_id = current_user.id
        if @like.save
            render json: @like
        else

            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = current_user.likes.find_by(comment_id: params[:comment_id], author_id: current_user.id)
        if @like && @like.destroy
            render json: @like
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def index
        @likes = Like.all
        render "api/likes/index"
    end

    # def show
    #     @like = Like.find(params[:id])
    #     if @like
    #         render "api/likes/show"
    #     else
    #         render json: @like.errors.full_messages, status: 404
    #     end
    # end

    private

    def like_params
        params.require(:like).permit(:comment_id, :author_id)
    end

end