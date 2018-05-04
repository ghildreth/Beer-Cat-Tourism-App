class AddLogoImageUrlToBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :logo_image_url, :string
  end
end
