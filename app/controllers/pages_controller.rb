class PagesController < ApplicationController
  def home
  end

  def settings
    render "pages/settings", :layout => false
  end
end
