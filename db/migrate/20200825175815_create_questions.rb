class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :questions, :author_id                #generally should have index for foreign keys
  end
end