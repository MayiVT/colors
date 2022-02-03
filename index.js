function colors(string) {
    if(!string) return console.log("You need to define a color!");
    string = string.toLowerCase();

    //By name

    switch (string) {
        case "aqua":
            return string = parseInt("1752220");
        case "dark_aqua":
            return string = parseInt("1146986");
        case "green":
            return string = parseInt("3066993");
        case "dark_green":
            return string = parseInt("2067650");
        case "blue":
            return string = parseInt("3447003");
        case "dark_blue":
            return string = parseInt("2123412");
        case "purple":
            return string = parseInt("10181046");
        case "dark_purple":
            return string = parseInt("7419530");
        case "luminous_vivid_pink":
            return string = parseInt("15277667");
        case "dark_vivid_pink":
            return string = parseInt("11342935");
        case "gold":
            return string = parseInt("15844367");
        case "dark_gold":
            return string = parseInt("12745742");
        case "orange":
            return string = parseInt("15105570");
        case "dark_orange":
            return string = parseInt("11027200");
        case "red":
            return string = parseInt("15158332");
        case "dark_red":
            return string = parseInt("10038562");
        case "grey":
            return string = parseInt("9807270");
        case "dark_grey":
            return string = parseInt("9936031");
        case "darker_grey":
            return string = parseInt("8359053");
        case "light_grey":
            return string = parseInt("12370112");
        case "navy":
            return string = parseInt("3426654");
        case "dark_navy":
            return string = parseInt("2899536");
        case "yellow":
            return string = parseInt("16776960");
        case "white":
            return string = parseInt("16777215");
        case "blurple":
            return string = parseInt("5793266");
        case "greyple":
            return string = parseInt("10070709");
        case "dark_but_not_black":
            return string = parseInt("2895667");
        case "not_quite_black":
            return string = parseInt("2303786");
        case "green2":
            return string = parseInt("5763719");
        case "yellow2":
            return string = parseInt("16705372");
        case "fuchsia":
            return string = parseInt("15418782");
        case "red2":
            return string = parseInt("15548997");
        case "black":
            return string = parseInt("2303786");
        default:
            return string = parseInt("0");
    }
}
//modules exports
module.exports = colors;

//By iMayiVT
//Discord: 🌸₊˚๑ iMayiVT ✧⁺ 🍡#4001
//Do not remove credits if forked.