Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show]
      resource :session, only: [:create, :destroy]      #resource only 1 so no index for example and do not need to signify id of the session
      resources :questions
      resources :comments do
        resource :like, only: [:destroy]
      end
      resources :likes, only: [:create, :index, :show]
      resources :replies
    end

    root "static_pages#root"
end
