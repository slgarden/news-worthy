require 'pathname'
require 'csv'

file = Pathname.new(File.expand_path('../../', __FILE__)).join('db','news_source_ideologies.csv')

def parse_csv(csv_file)
  csv_data = CSV.read(csv_file)
  headers = csv_data.shift.map {|i| i.to_s}
  string_data = csv_data.map {|row| row.map {|cell| cell.to_s} }
  array_of_hashes = string_data.map {|row| Hash[*headers.zip(row).flatten]}
end

parse_csv(file).each do |source|
  Source.create(source)
end
