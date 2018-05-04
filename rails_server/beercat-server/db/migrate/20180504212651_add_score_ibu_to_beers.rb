class AddScoreIbuToBeers < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :score_IBU, :float
  end
end
