class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.string  :news_source
      t.integer :ideological_score
      t.string  :keyword

      t.timestamps
    end
  end
end
