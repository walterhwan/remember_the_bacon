Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]

    resources :lists, only: [:index, :show, :create, :update, :destroy] do
      resources :tasks, only: [:create, :index]
    end
    resources :tasks, only: [:show, :update, :destroy]
  end

  root to: "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
