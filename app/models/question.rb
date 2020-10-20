# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord

    validates :title, :body, :author_id, presence: true


    belongs_to :author,
        class_name: :User

    has_many :comments,
        class_name: :Comment,
        dependent: :destroy

end
