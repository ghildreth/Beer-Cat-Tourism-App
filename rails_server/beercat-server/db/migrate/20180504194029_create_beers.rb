class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.references :brewery, foreign_key: true
      t.string :name
      t.text :description
      t.string :style
      t.float :score_ABV
      t.string :score_SRM
      t.boolean :score_adventurous
      t.boolean :score_sour
      t.boolean :seasonal

      t.timestamps
    end
  end
end
