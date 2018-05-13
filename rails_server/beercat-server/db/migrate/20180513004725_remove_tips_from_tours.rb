class RemoveTipsFromTours < ActiveRecord::Migration[5.2]
  def change
    remove_column :tours, :tips, :text
  end
end
