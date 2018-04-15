class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :body, presence: true, unless: :image?
  mount_uploader :image, ImageUploader

  scope :search_with_id, ->(keyword) { where('id > ?', keyword) }
end
