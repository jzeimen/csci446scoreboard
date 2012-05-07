class HighScore < ActiveRecord::Base
	validates :score, :inclusion => { :in => (0..10), :message => "%{value} is not a valid size" }
end
