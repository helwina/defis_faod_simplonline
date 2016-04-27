class CreateVoitures < ActiveRecord::Migration
  def change
    create_table :voitures do |t|
      t.string :immatriculation
      t.string :couleur
      t.string :marque
      t.string :modele
      t.date :date_mise_en_service

      t.timestamps null: false
    end
  end
end
