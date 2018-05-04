class CreateTours < ActiveRecord::Migration[5.2]
  def change
    create_table :tours do |t|
      t.string :name
      t.string :city
      t.float :duration
      t.text :description
      t.text :tips
      t.float :rating
      t.text :logo_image_url
      t.text :banner_image_url

      t.timestamps
    end
  end
end
