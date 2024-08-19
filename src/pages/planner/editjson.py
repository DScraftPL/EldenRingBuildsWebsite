# script to edit this stupid ass json file

import json

with open("talismans.json", "r") as file:
    talismans = json.load(file)

for talisman in talismans.values():
    talisman["multiple"] = False

with open("talismans.json.new", "w") as file:
    json.dump(talismans, file)
