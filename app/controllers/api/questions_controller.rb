class Api::QuestionsController < ApplicationController

    def new
        @question = Question.new
        render json: ["New Question"]
    end
    
    def index
        @questions = Question.all
        render "api/questions/index"
    end
    
    def create
        @question = Question.new(question_params)
        if @question.save
            render "api/questions/show"
        else
            render json: @question.errors.full_messages, status: 422
        end
    end
    
    def show
        @question = Question.find(params[:id])
        if @question
            render "api/questions/show"
        else
            render json: @question.errors.full_messages, status: 404
        end
    end
    
    def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
            render "api/questions/show"
        else
            render json: @question.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render json: ["Deleted Question"]
    end
    
    private
    
    def question_params
        params.require(:question).permit(:title, :body, :author_id)
    end
end
