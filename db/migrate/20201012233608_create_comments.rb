class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
    add_index :comments, :question_id
    add_index :comments, :author_id
  end
end
