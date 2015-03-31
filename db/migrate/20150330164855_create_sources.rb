class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.string  :news_source
      t.integer :liberal_score
      t.string  :source_keyword

      t.timestamps
    end
  end
end
