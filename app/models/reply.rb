class Reply < ApplicationRecord
    validates :body, :comment_id, :author_id, presence: true

    belongs_to :author,
        class_name: :User

    belongs_to :comment,
        class_name: :Comment
end