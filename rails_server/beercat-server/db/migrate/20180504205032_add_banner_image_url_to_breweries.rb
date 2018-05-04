class AddBannerImageUrlToBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :banner_image_url, :string
  end
end
