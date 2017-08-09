source 'https://rubygems.org'
gem "jekyll", "3.5.1"

group :jekyll_plugins do
  gem 'jekyll-redirect-from'
  gem 'jekyll-sitemap'
  gem 'jekyll-paginate'
  gem 'rouge'
end

require 'rbconfig'
if RbConfig::CONFIG['target_os'] =~ /darwin(1[0-3])/i
  gem 'rb-fsevent', '<= 0.9.4'
end
