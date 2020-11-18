class CreateReplies < ActiveRecord::Migration[5.2]
  def change
    create_table :replies do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :comment_id, null: false
      t.timestamps
    end
    add_index :replies, :comment_id
    add_index :replies, :author_id
  end
end