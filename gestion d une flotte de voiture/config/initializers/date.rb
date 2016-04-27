class Date
  def age
    ((Date.today-self)/365.25).floor
  end
end