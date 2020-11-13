class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer  :comment_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :likes, :comment_id
    add_index :likes, :author_id
  end
end