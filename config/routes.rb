Rails.application.routes.draw do
  root 'home#index'
  get "index", to: "home#index", as: :index
  get 'taskboard', to: 'home#taskboard', as: :taskboard
  get 'contacts', to: 'home#contacts', as: :contacts
  get 'gauges', to: 'home#gauges', as: :gauges
  get 'chartjs', to: 'home#chartjs', as: :chartjs
  get 'general', to: 'home#general', as: :general
  get 'team', to: 'home#team', as: :team
  get 'data', to: 'home#data', as: :data
  get 'pages/chartjs'
  get 'pages/contacts'
  get 'pages/data'
  get 'pages/formsgeneral'
  get 'pages/gauges'
  get 'pages/taskboard'
  get 'pages/team'
  get 'pages/settings'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
