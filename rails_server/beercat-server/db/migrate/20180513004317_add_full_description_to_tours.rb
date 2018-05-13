class AddFullDescriptionToTours < ActiveRecord::Migration[5.2]
  def change
    add_column :tours, :full_description, :text
  end
end
