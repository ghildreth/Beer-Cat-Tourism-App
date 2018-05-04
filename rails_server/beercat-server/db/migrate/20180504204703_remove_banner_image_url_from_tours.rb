class RemoveBannerImageUrlFromTours < ActiveRecord::Migration[5.2]
  def change
    remove_column :tours, :banner_image_url, :string
  end
end
