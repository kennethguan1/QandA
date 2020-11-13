class Like < ApplicationRecord
    validates :author_id, :comment_id, presence: true

    validates :comment, uniqueness: {scope: :user}

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :comment,
        foreign_key: :comment_id,
        class_name: :Comment

end
