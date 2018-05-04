class RemoveLogoImageUrlFromTours < ActiveRecord::Migration[5.2]
  def change
    remove_column :tours, :logo_image_url, :string
  end
end
