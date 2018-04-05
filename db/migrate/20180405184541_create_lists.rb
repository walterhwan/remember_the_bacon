class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.integer :user_id, null: false
      t.string :name, null: false

      t.index :user_id

      t.timestamps
    end
  end
end
