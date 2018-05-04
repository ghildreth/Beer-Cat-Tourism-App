class CreateTourBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :tour_breweries do |t|
      t.references :tour, foreign_key: true
      t.references :brewery, foreign_key: true
      t.integer :brewery_order

      t.timestamps
    end
  end
end
