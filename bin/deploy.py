#!/usr/bin/python

# This is a little messy, but it's an easy way to have a parcel-built
# site living on GitHub pages.

from shutil import copyfileobj

# copy html
print("[*] Updating HTML")
with open('index.html', 'w+') as output, open('src/index.html', 'r') as file:
  copyfileobj(file, output)

# copy js
print("[*] Updating JS")
with open('index.js', 'w+') as output, open('dist/index.js', 'r') as file:
  copyfileobj(file, output)

# copy css
print("[*] Updating CSS")
with open('index.css', 'w+') as output, open('dist/index.css', 'r') as file:
  copyfileobj(file, output)

# update html
print("[*] Updating Paths")
with open('index.html', 'r') as file:
  data = file.read()

data = data.replace('js/', '')
data = data.replace('<!--', '')
data = data.replace('-->', '')

with open('index.html', 'w') as output:
  output.write(data)

print("[*] Done!")