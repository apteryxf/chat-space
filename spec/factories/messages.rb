FactoryGirl.define do
  factory :message do
    body Faker::Lorem.sentence
    image File.open("#{Rails.root}/spec/images/kiwi.jpg")
    user
    group
  end
end
