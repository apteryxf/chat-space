class Group < ApplicationRecord
  validates :name, presence: true

  has_many :members
  has_many :users, through: :members
  has_many :messages

  def show_last_message
    if messages.last.present?
      messages.last.body? ? messages.last.body : '画像が投稿されています'
    else
      'まだメッセージはありません。'
    end
  end
end
