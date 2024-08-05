import React, { ReactNode } from "react";
import { Button as RNButton, Image } from "react-native";

type ButtonProps = {
  buttonProps: any;
  children: ReactNode;
  disabled?: boolean;
  iconProps?: any;
  onPress: () => void;
};

const Button = ({ onPress, iconProps, disabled = false, children, buttonProps }: ButtonProps) => (
  <RNButton
    disabled={disabled}
    onPress={onPress}
    icon={
      iconProps
        ? ({ size }) => {
            return <Image style={{ width: size, height: size }} {...iconProps} />;
          }
        : null
    }
    {...buttonProps}
    uppercase={false}>
    {children}
  </RNButton>
);

export default Button;
