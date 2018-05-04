class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :username
      t.string :password_hash
      t.boolean :preference_ABV
      t.boolean :preference_SRM
      t.boolean :preference_IBU
      t.boolean :preference_adventurous
      t.boolean :preference_sour

      t.timestamps
    end
  end
end
