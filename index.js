function colors(color) {
  if (!color) return console.log("You need to define a color!");
  color = color.toLowerCase();

  //By name

  const colorsOptions = {
    aqua: parseInt("1752220"),
    dark_aqua: parseInt("1146986"),
    green: parseInt("3066993"),
    dark_green: parseInt("2067650"),
    blue: parseInt("3447003"),
    dark_blue: parseInt("2123412"),
    purple: parseInt("10181046"),
    dark_purple: parseInt("7419530"),
    luminous_vivid_pink: parseInt("15277667"),
    dark_vivid_pink: parseInt("11342935"),
    gold: parseInt("15844367"),
    dark_gold: parseInt("12745742"),
    orange: parseInt("15105570"),
    dark_orange: parseInt("11027200"),
    red: parseInt("15158332"),
    dark_red: parseInt("10038562"),
    grey: parseInt("9807270"),
    dark_grey: parseInt("9936031"),
    darker_grey: parseInt("8359053"),
    light_grey: parseInt("12370112"),
    navy: parseInt("3426654"),
    dark_navy: parseInt("2899536"),
    yellow: parseInt("16776960"),
    white: parseInt("16777215"),
    blurple: parseInt("5793266"),
    greyple: parseInt("10070709"),
    dark_but_not_black: parseInt("2895667"),
    not_quite_black: parseInt("2303786"),
    green2: parseInt("5763719"),
    yellow2: parseInt("16705372"),
    fuchsia: parseInt("15418782"),
    red2: parseInt("15548997"),
    black: parseInt("2303786"),
    random: "#xxxxxx".replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    ),
  };

  return colorsOptions[color] || parseInt("0");
}

module.exports = colors;

//By iMayiVT
//Discord: 🌸₊˚๑ iMayiVT ✧⁺ 🍡#4001
//Do not remove credits if forked.
