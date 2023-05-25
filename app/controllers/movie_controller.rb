class MovieController < ApplicationController
  def index
    @movies = @movies.all
  end
end
