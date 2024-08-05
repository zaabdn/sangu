export const colors = {
  primary: "#DC5978",
  secondary: "##f2a6b3",
  third: "#ffe3eb",
  fourth: "#2f4858",
  background: "",
  darkBackground: "",
  dullOrange: "#df8c29",
  tealish: "#1fa1ab",
  sienna: "#b07016",
  bluegreen: "#048573",
  cobalt: "#1c568f",
  twilightBlue: "#0e3c69",
  niceBlue: "#1477a8",
  waterBlue: "#1a94ca",
  waterBlueTwo: "#1992c7",
  greenTeal: "#0ca982",
  bluegreenTwo: "#008573",
  darkSeaGreen: "#0c7953",
  bluishGreen: "#0d9b70",
  brownyOrange: "#d35e00",
  brownishOrange: "#d56919",
  brickOrange: "#b74c0a",
  blueGreen: "#146a6c",
  greenishBlue: "#0d8b79",
  white: "#dad9d9",
  whiteTwo: "#edebeb",
  teal: "#008e79",
  black: "#181A1A",
  black64: "rgba(0, 0, 0, 0.64)",
  black1: "rgba(0, 0, 0, 0.1)",
  whiteThree: "#ffffff",
  brownGrey: "#677e8c",
  greyishBrown: "#575757",
  veryLightPink: "#eeeeee",
  veryLightPink50: "rgba(242, 242, 242, 0.5)",
  veryLightPinkTwo: "#e9e8e8",
  veryLightPink23: "rgb(238,238,238)",
  greenTealTwo: "#13b973",
  pinkish: "#e35c69",
  tealishTwo: "#1fab9e",
  darkCyan: "#0c909a",
  darkBlueGrey: "#243453",
  denim: "#344c78",
  burntSienna: "#bb6e14",
  burntUmber: "#9c5b13",
  darkSlateBlue: "#172d51",
  lipstick: "#ca1a37",
  greyish_brown_two: "#4a4a4a",
  brownGreyOpacit50: "#909b9b9b",
  navy: "#002747",
  light_navy_blue: "#324c7c",
  navy_two: "#011e39",
  steelGrey: "#72808e",
  warmGrey: "rgb(155,155,155)",
  peekingYellow: "#f2bb0d",
  lightGrey: "rgb(237,237,235)",
  whiteBorder: "rgb(216,216,216)",
  buttonHighlight: "#d9d9d8",
  whiteunderline: "#f3f3f3",
  greyhint: "#C5D1D8",
  paleGrey: "rgb(238, 240, 245)",
  darkSeafoam: "rgb (24, 178, 114)",
  darkGrey: "#246F6B",
  SA100: "#008873",
  SA50: "#80C4B9",
  shadeGrey100: "#677e8c",
  Dark100: "#585858",
  shadesGrey25: "#EBEFF2",
  cardDetailBorder: "#C5D1D8",
  shadeGrey150: "#23343F",
  Dark150: "#181A1A",
  Dark125: "#353535",
  shadeGrey75: "#A3B5BF",
  Light75: "#8C8C8C",
  shadeGrey50: "#C5D1D8",
  Light50: "#CBCACA",
  Light0: "#FFFFFF",
  CC100: "#E65500",
  CC50: "#F3AA80",
  RED100: "#D0021B",
  RED50: "#E8818D",
  shadeRED: "#FFEEF0",
  BO100: "#005794",
  MF100: "#0096CF",
  MF50: "#80CBE7",
  TD100: "#00A4AD",
  TD50: "#80D2D6",
  Red100: "#677E8C",
  Red50: "#E8818D",
  CA100: "#009E6D",
  CA50: "#80CFB6",
  BO50: "#80ABCA",
  PL100: "#EE8800",
  PL50: "#F7C480",
  MO100: "#BC6D00",
  MO50: "#DEB680",
  SR100: "#2C4C7C",
  SR50: "#96A6BE",
  SA20: "#CCE7E3",
  CA20: "#CCECE2",
  BO20: "#CCDDEA",
  BGSHDW: "rgba(0, 0, 0, 0.2)",
  TD20: "#CCEDEF",
  BLACKCOLOR: "#131415",
  DOTSA20: "rgba(0, 136, 115, 0.2)",
  DOTBO20: "rgba(0, 87, 148, 0.2)",
  DOTCC20: "rgba(230, 85, 0, 0.2)",
  DOTMF20: "rgba(0, 150, 207, 0.2)",
  KeyboardBG: "#05182F",
  KeyboardButton: "#002F56",
  CASA10Border: "rgba(197, 209, 216, 1.0)",
  systemYellow: "#FFF0C7",
  white85: "rgba(255,255,255,0.85)",
  white20: "rgba(255,255,255,0.2)",
  dark150: "#181A1A",
  Light25: "#F3F3F3",
  shadeGrey125: "#425866",
  darkest: "#000000",
  dark25: "#6B6B6B",
  dark125: "#1C1C1E",
  dark100: "#313131",
  REDDARK: "#A11112",
  grey150: "#23343F",
  PB100: "#163871",
  PB50: "rgba(22, 55, 113, 0.5)",
  shadesLight50: "#CBCACA",
  DarkBackground: "#000000",
  LightBackground: "#F2F2F6",
  greycontact: "#585858",
  LIGHT50: "#C4C4C4",
  insurance100: "#0045A2",
  light75: "#8c8c8c",
  SA125: "#006656",
  CA125: "#007652",
  CC125: "#AD4000",
  BO125: "#00416F",
  MF125: "#00709B",
  TD125: "#007B82",
  PL125: "#B36600",
  MO125: "#8D5200",
  SR125: "#21395D",
  RED125: "#9C0114",
  TDPRDIDR: "#00ACA6",
  TDPRDUSD: "#00A4AD",
  TDPRDIBIDR: "#008364",
  TDPRDIBUSD: "#006D96",
  whiteunderlinedarkmode: "rgba(255,255,255, 0.2)",
  Dark75: "#8C8C8C",
  PB125: "#102A55",
  INS125: "#00347A",
  dullYellow: "#FFF0C7",
};

export const darkTheme = (mode: string, color: string) => {
  let newColor = color;
  if (mode == "dark") {
    newColor = colors.whiteThree;
  }

  return newColor;
};

export const lightToDarks = (mode: string, color: string) => {
  let newColor = color;
  if (mode == "dark") {
    newColor = colors.darkest;
  }

  return newColor;
};

export const switchHeaderColor = (mode: string) => {
  let newColor = colors.whiteThree;
  if (mode == "dark") {
    newColor = colors.Dark150;
  }

  return newColor;
};

export const switchFooterColor = (mode: string, color: string) => {
  let newColor = color;
  if (mode == "dark") {
    newColor = colors.whiteThree;
  }

  return newColor;
};

export const switchTextColorToLight = (mode: string, color: string) => {
  let newColor = mode == "dark" ? colors.whiteThree : color;

  return newColor;
};

export const switchWhiteToNew = (mode: string, color: string) => {
  let newColor = mode == "dark" ? color : colors.whiteThree;

  return newColor;
};

export const tabColorMode = (modeColor, type) => {
  let color = "";
  if (type == "focus") {
    if (modeColor == "dark") {
      color = colors.whiteThree;
    } else {
      color = colors.SR100;
    }
  } else {
    if (modeColor == "dark") {
      color = colors.dark25;
    } else {
      color = colors.shadeGrey100;
    }
  }

  return color;
};
export const containerTheme = (mode, color) => {
  let newColor = "";
  if (mode == "dark") {
    newColor = colors.whiteThree;
  } else {
    newColor = color;
  }

  return newColor;
};

export const themeColor = (localThemes, colorLight, colorDark) => {
  let newColor = "";
  if (localThemes == "dark") {
    newColor = colorDark;
  } else {
    newColor = colorLight;
  }
  return newColor;
};

export const colorTextScame = (mode, color = colors.black) => {
  let newColor = "";
  if (mode == "dark") {
    newColor = colors.Light0;
  } else {
    newColor = color;
  }
  return newColor;
};

export const themeScame = (mode) => {
  let newColor = "";
  if (mode == "dark") {
    newColor = colors.DarkBackground;
  } else {
    newColor = colors.Light0;
  }
  return newColor;
};
