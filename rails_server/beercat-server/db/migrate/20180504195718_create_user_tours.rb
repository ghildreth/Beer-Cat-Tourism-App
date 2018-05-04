class CreateUserTours < ActiveRecord::Migration[5.2]
  def change
    create_table :user_tours do |t|
      t.references :user, foreign_key: true
      t.references :tour, foreign_key: true
      t.text :description
      t.float :rating

      t.timestamps
    end
  end
end
