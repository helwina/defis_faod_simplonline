json.array!(@personnes) do |personne|
  json.extract! personne, :id, :nom, :prenomb, :date_de_naissance
  json.url personne_url(personne, format: :json)
end
