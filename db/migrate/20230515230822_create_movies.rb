class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.string :score
      t.string :rating
      t.string :actor

      t.timestamps
    end
  end
end
