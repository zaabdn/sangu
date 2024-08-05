import React from "react";
import { Text } from "react-native";

import { FONT_SIZES, SIZES, LINE_HEIGHTS } from "./fontSize";
import { colors } from "src/assets/colors";

type TypographyProps = {
  fontType: string;
  fontSize: string;
  color: string;
  text: string;
  style: any;
  isHTML: boolean;
};

const Typography = ({
  fontType,
  fontSize = "XM",
  color = colors.black,
  text = "",
  style = {},
  isHTML,
  ...otherProps
}: TypographyProps) => {
  const idx = SIZES.indexOf(fontSize.toUpperCase()) !== -1 ? SIZES.indexOf(fontSize.toUpperCase()) : 1;

  if (isHTML) {
    return <></>;
  }

  return (
    <Text
      {...otherProps}
      style={{
        color,
        fontSize: FONT_SIZES[idx],
        // fontFamily: fontType == "regular" ? "Lato-Regular" : "Lato-Bold",
        fontWeight: fontType == "regular" ? "normal" : "500",
        lineHeight: LINE_HEIGHTS[idx],
        ...style,
      }}>
      {text}
    </Text>
  );
};

export default Typography;
