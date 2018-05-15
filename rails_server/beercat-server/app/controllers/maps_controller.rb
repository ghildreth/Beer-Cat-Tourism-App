require "net/https"
require "uri"

class MapsController < ApplicationController

  def library
    uri = URI.parse("https://maps.googleapis.com/maps/api/js?key=#{ENV['GOOGLE_MAPS_KEY']}&v=3.31&libraries=places,geometry")
    puts ENV['GOOGLE_MAPS_KEY']
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Get.new(uri.request_uri)

    response = http.request(request)
    render body: response.body

  end

end
