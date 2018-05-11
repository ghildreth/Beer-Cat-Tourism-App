class User < ApplicationRecord
  has_secure_password
  has_many :user_tours
  has_many :tours, through: :user_tours
  
  validates :email, uniqueness: true, case_sensitive: false
  validates :username, uniqueness: true, case_sensitive: false

end
