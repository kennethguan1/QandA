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
require 'test_helper'

class ReplyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
