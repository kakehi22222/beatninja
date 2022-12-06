class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.integer :clickCount
      t.timestamps null: false
    end
  end
end
