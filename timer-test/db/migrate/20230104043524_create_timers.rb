class CreateTimers < ActiveRecord::Migration[6.1]
  def change
    create_table :timers do |t|
      t.time :timer, null: false

      t.timestamps
    end
  end
end
