# script to edit this stupid ass json file

import json


def is_number(string):
    try:
        float(string)
        return True
    except ValueError:
        return False


with open("hands.json.old", "r") as file:
    whole = {}
    for line in file:
        print(line.strip())
        values = []
        name = []
        effect = []
        stopname = False
        for word in line.split():
            if is_number(word):
                values.append(word)
                stopname = True
            else:
                if stopname:
                    effect.append(word)
                else:
                    name.append(word)
        itemname = " ".join(map(str, name))
        effectname = " ".join(map(str, effect))
        data = {
            "PhysRed": values[0],
            "StrikeRed": values[1],
            "SlashRed": values[2],
            "PierceRed": values[3],
            "MagicRed": values[4],
            "FireRed": values[5],
            "LightRed": values[6],
            "HolyRed": values[7],
            "Immunity": values[8],
            "Robustness": values[9],
            "Focus": values[10],
            "Vitality": values[11],
            "Poise": values[12],
            "Weight": values[13],
            "Effect": effectname,
        }
        whole[itemname] = data
    print(whole)

with open("hands.json", "w") as file:
    json.dump(whole, file)
