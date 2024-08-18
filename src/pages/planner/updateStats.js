function updateHP(lvl) {
  if (lvl >= 61) {
    return Math.floor(
      1900 + 200 * (1 - Math.pow((1 - ((lvl - 60) / 39)), 1.2))
    );
  } else if (lvl >= 41) {
    return Math.floor(
      1450 + 450 * (1 - Math.pow((1 - ((lvl - 40) / 20)), 1.2))
    )
  } else if (lvl >= 26) {
    return Math.floor(
      800 + 650 * (Math.pow((((lvl - 25) / 15)), 1.1))
    )
  } else {
    return Math.floor(
      300 + 500 * (Math.pow((((lvl - 1) / 24)), 1.5))
    )
  }
}

function updateFP(lvl) {
  if (lvl >= 61) {
    return Math.floor(
      350 + 100 * (((((lvl - 60) / 39)), 1.2))
    );
  } else if (lvl >= 36) {
    return Math.floor(
      200 + 150 * (1 - Math.pow((1 - ((lvl - 35) / 25)), 1.2))
    )
  } else if (lvl >= 16) {
    return Math.floor(
      95 + 105 * (((((lvl - 15) / 20))))
    )
  } else {
    return Math.floor(
      50 + 45 * (((((lvl - 1) / 14))))
    )
  }
}

function updateStamina(lvl) {
  if (lvl >= 61) {
    return Math.floor(
      155 + 15 * (((((lvl - 50) / 49))))
    );
  } else if (lvl >= 36) {
    return Math.floor(
      130 + 25 * (Math.pow((((lvl - 30) / 20))))
    )
  } else if (lvl >= 16) {
    return Math.floor(
      105 + 25 * (((((lvl - 15) / 15))))
    )
  } else {
    return Math.floor(
      80 + 25 * (((((lvl - 1) / 14))))
    )
  }
}

export { updateHP, updateFP, updateStamina }

