class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :list_id, null: false
      t.string :description, null: false
      t.date :due_date
      t.integer :estimate
      t.boolean :completed, null: false

      t.index :list_id

      t.timestamps
    end
  end
end
