class User < ApplicationRecord
  has_secure_password
  
  validates_presence_of   :name, :email, :password
  validates_format_of     :email, with: /@/
  validates_uniqueness_of :email, :username, case_sensitive: false

  before_save { self.email = email.downcase }
end
