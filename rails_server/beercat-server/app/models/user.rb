class User < ApplicationRecord
  has_secure_password
  
  validates :email, uniqueness: true, case_sensitive: false
  validates :username, uniqueness: true, case_sensitive: false

end
