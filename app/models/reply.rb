# == Schema Information
#
# Table name: replies
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  comment_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Reply < ApplicationRecord
    validates :body, :comment_id, :author_id, presence: true

    belongs_to :author,
        class_name: :User

    belongs_to :comment,
        class_name: :Comment
end
