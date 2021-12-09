# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  comment_id :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :author_id, :comment_id, presence: true

    # validates :comment, uniqueness: {scope: :user}

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :comment,
        foreign_key: :comment_id,
        class_name: :Comment

end
