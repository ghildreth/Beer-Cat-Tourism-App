# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_13_004725) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beers", force: :cascade do |t|
    t.bigint "brewery_id"
    t.string "name"
    t.text "description"
    t.string "style"
    t.float "score_ABV"
    t.string "score_SRM"
    t.boolean "score_adventurous"
    t.boolean "score_sour"
    t.boolean "seasonal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "score_IBU"
    t.index ["brewery_id"], name: "index_beers_on_brewery_id"
  end

  create_table "breweries", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "address"
    t.text "description"
    t.decimal "latitude"
    t.decimal "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "logo_image_url"
    t.string "banner_image_url"
  end

  create_table "tour_breweries", force: :cascade do |t|
    t.bigint "tour_id"
    t.bigint "brewery_id"
    t.integer "brewery_order"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brewery_id"], name: "index_tour_breweries_on_brewery_id"
    t.index ["tour_id"], name: "index_tour_breweries_on_tour_id"
  end

  create_table "tours", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.float "duration"
    t.text "description"
    t.float "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "full_description"
  end

  create_table "user_tours", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "tour_id"
    t.text "description"
    t.float "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tour_id"], name: "index_user_tours_on_tour_id"
    t.index ["user_id"], name: "index_user_tours_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.boolean "preference_ABV"
    t.boolean "preference_SRM"
    t.boolean "preference_IBU"
    t.boolean "preference_adventurous"
    t.boolean "preference_sour"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

  add_foreign_key "beers", "breweries"
  add_foreign_key "tour_breweries", "breweries"
  add_foreign_key "tour_breweries", "tours"
  add_foreign_key "user_tours", "tours"
  add_foreign_key "user_tours", "users"
end
