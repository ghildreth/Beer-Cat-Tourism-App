class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :city
      t.string :address
      t.text :description
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
