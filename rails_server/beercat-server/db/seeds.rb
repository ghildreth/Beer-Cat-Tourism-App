# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Let's do this ...

## BREWERIES

puts "Creating Breweries ..."

Brewery.create(name: 'Brewery Parallel 49&3/4', city: 'Vancouver', address: '1234 Fake Street', description: "This is the descriptiono of the brewery, it's the best brewery ever.", latitude: 49.283834, longitude: -123.0665496)
Brewery.create(name: "Cat's Meow", city: 'Vancouver', address: '237 That Street', description: "You can get beer here. It's tasty.", latitude: 49.2691407, longitude: -123.1051664)
Brewery.create(name: "Mouse Hole", city: 'Vancouver', address: '615 Cheese Street', description: "Tiny hole in the wall watering hole,", latitude: 49.2691602, longitude: -123.1051512)
Brewery.create(name: 'The Honeycomb', city: 'Vancouver', address: '435 The Farm', description: "Where the bees come to pollinate. Take a break from being a busy worker bee and drink some nectar.", latitude: 49.282684, longitude: -123.138617)
Brewery.create(name: 'Star Wars Cantina', city: "Pirate City", address:'Ep. IV', description: 'Her name was Leia - She was a princess! With a danish on each ear and Darth Vader drawing near...', latitude: 49.2787766, longitude: -123.1160782)

## BEERS

puts "Creating Beers ..."

Beer.create!({
  brewery_id: 1,
  name:  'Magic Ale',
  description: "Description",
  style: 'Amber Ale',
  score_ABV: 5,
  score_SRM: 6,
  score_IBU: 30,
  score_adventurous: false,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 1,
  name:  'Butterbeer',
  description: "Description",
  style: 'Cream Ale',
  score_ABV: 4.5,
  score_SRM: 8,
  score_IBU: 35,
  score_adventurous: true,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 1,
  name:  'Leviosa Pilsner',
  description: "Description",
  style: 'Pilsner',
  score_ABV: 4,
  score_SRM: 4,
  score_IBU: 22,
  score_adventurous: false,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 1,
  name:  'House Elf IPA',
  description: "Description",
  style: 'IPA',
  score_ABV: 6,
  score_SRM: 5,
  score_IBU: 65,
  score_adventurous: false,
  score_sour: false,
  seasonal: true
})

Beer.create!({
  brewery_id: 2,
  name:  'Fat Cat Stout',
  description: "Description",
  style: 'Stout',
  score_ABV: 6,
  score_SRM: 17,
  score_IBU: 55,
  score_adventurous: true,
  score_sour: false,
  seasonal: true
})

Beer.create!({
  brewery_id: 2,
  name:  "Yarn Ballin' IPA",
  description: "Description",
  style: 'IPA',
  score_ABV: 6.5,
  score_SRM: 6,
  score_IBU: 88,
  score_adventurous: false,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 2,
  name:  "Bowl of Milk Stout",
  description: "Description",
  style: 'Stout',
  score_ABV: 8,
  score_SRM: 19,
  score_IBU: 45,
  score_adventurous: false,
  score_sour: false,
  seasonal: true
})

Beer.create!({
  brewery_id: 3,
  name:  "Door Mouse IPA",
  description: "Description",
  style: 'IPA',
  score_ABV: 8,
  score_SRM: 11,
  score_IBU: 80,
  score_adventurous: false,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 3,
  name:  "Cheese Ale",
  description: "Description",
  style: 'Golden Ale',
  score_ABV: 5,
  score_SRM: 10,
  score_IBU: 20,
  score_adventurous: true,
  score_sour: false,
  seasonal: true
})

Beer.create!({
  brewery_id: 3,
  name:  "Farm Mouse Ale",
  description: "Description",
  style: 'Farmhouse Ale',
  score_ABV: 5.5,
  score_SRM: 5,
  score_IBU: 20,
  score_adventurous: false,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 3,
  name:  "Three Blind Mice Saison",
  description: "Description",
  style: 'Sasion',
  score_ABV: 8,
  score_SRM: 5,
  score_IBU: 25,
  score_adventurous: true,
  score_sour: true,
  seasonal: true
})

Beer.create!({
  brewery_id: 3,
  name:  "Street Rat Porter",
  description: "Description",
  style: 'Porter',
  score_ABV: 6,
  score_SRM: 25,
  score_IBU: 20,
  score_adventurous: false,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 4,
  name:  'The Beekeeper',
  description: "A hoppy delight - this IPA has hints of smokiness",
  style: 'IPA',
  score_ABV: 4,
  score_SRM: 5,
  score_IBU: 70,
  score_adventurous: false,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 4,
  name:  'Queen Bee',
  description: "A strong Stout, and our bestseller.",
  style: 'Stout',
  score_ABV: 4.8,
  score_SRM: 22,
  score_IBU: 30,
  score_adventurous: false,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 4,
  name:  'Bee Venom',
  description: "Not for the faint of heart, this delightful sour will sting your tastebuds.",
  style: 'Gose',
  score_ABV: 4.1,
  score_SRM: 3.2,
  score_IBU: 8,
  score_adventurous: true,
  score_sour: true,
  seasonal: false
})

Beer.create!({
  brewery_id: 4,
  name:  'Worker Bee Session',
  description: "Great for an all day break from work with your fellow worker bees.",
  style: 'ISA',
  score_ABV: 4.3,
  score_SRM: 5.0,
  score_IBU: 30,
  score_adventurous: false,
  score_sour: false,
  seasonal: false
})

Beer.create!({
  brewery_id: 4,
  name:  'Pollen Saison',
  description: "A fresh delightful spring beer with hints of honey.",
  style: 'Saison',
  score_ABV: 4.8,
  score_SRM: 3.5,
  score_IBU: 25,
  score_adventurous: false,
  score_sour: false,
  seasonal: true
})


## Tours

puts "Creating Tours ..."

Tour.create!({
  name: "Vancouver Prowl",
  city: "Vancouver",
  duration: 3.5,
  description: "It's awesome!",
  tips: "See all the things.",
  rating: 4
})

Tour.create!({
  name: "Late Night Pub Pounce",
  city: "Vancouver",
  duration: 1.5,
  description: "Amazing Vancouver nightlife.",
  tips: "Don't get lost",
  rating: 2
})

## TourBreweries

puts "Creating TourBrewery ..."

TourBrewery.create!({
  tour_id: 1,
  brewery_id: 1,
  brewery_order: 1
})

TourBrewery.create!({
  tour_id: 1,
  brewery_id: 2,
  brewery_order: 2
})

TourBrewery.create!({
  tour_id: 2,
  brewery_id: 4,
  brewery_order: 1
})

TourBrewery.create!({
  tour_id: 2,
  brewery_id: 5,
  brewery_order: 1
})

TourBrewery.create!({
  tour_id: 1,
  brewery_id: 3,
  brewery_order: 1
})
## Users

# puts "Creating Users ..."



puts "DONE!"
