class CreatePersonnes < ActiveRecord::Migration
  def change
    create_table :personnes do |t|
      t.string :nom
      t.string :prenomb
      t.date :date_de_naissance

      t.timestamps null: false
    end
  end
end
