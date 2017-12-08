Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'
  get 'home/taskboard'
  get 'home/contacts'
  get 'home/gauges'
  get 'home/chartjs'
  get 'home/general'
  get 'home/team'
  get 'home/data'
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
