import React, { useEffect, useState } from "react";

import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import { useNetInfo } from "@react-native-community/netinfo";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors } from "../assets/colors";

interface NetworkContextType {
  active: boolean;
  setActive?: (active: boolean) => void;
  timer?: number;
  setTimer?: (timer: number) => void;
}

const defaultNetworkContext: NetworkContextType = {
  active: true,
  setActive: () => {},
  timer: 2000,
  setTimer: () => {},
};

export const NetworkContext = React.createContext<NetworkContextType>(defaultNetworkContext);

export function NetworkProvider({ children }: any) {
  const insets = useSafeAreaInsets();
  const netInfo = useNetInfo();
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [counter, setCounter] = useState(0);

  const closePopup = () => {
    setIsConnected(true);
    if (!netInfo.isConnected) {
      setTimeout(() => {
        setIsConnected(false);
      }, 250);
    }
  };

  useEffect(() => {
    setIsConnected(!!netInfo.isConnected);
    setCounter(counter + 1);
  }, [netInfo.isConnected]);

  return (
    <NetworkContext.Provider value={{ active: isConnected }}>
      {children}
      {!isConnected && counter > 1 && (
        <Modal transparent visible={!isConnected} animationType="slide">
          <TouchableOpacity
            activeOpacity={1}
            onPress={closePopup}
            style={{
              position: "absolute",
              bottom: 0,
              height: hp("100%"),

              flex: 1,
              width: wp("100%"),
              justifyContent: "flex-end",
            }}>
            <View style={[styles.redPopup, { paddingBottom: insets.bottom ? 25 : 15 }]}>
              <View style={{ width: wp(81) }}>
                {/* <TypographyText text={translation.internet_connection_err} color="#fff" fontSize="m" /> */}
              </View>
              <Image
                style={{
                  width: wp(5.51),
                  height: wp(5.51),
                  marginLeft: wp(4.43),

                  resizeMode: "cover",
                }}
                source={require("@asset/images/systemCloseWhite.png")}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </NetworkContext.Provider>
  );
}

const styles = StyleSheet.create({
  redPopup: {
    bottom: hp("0%"),
    backgroundColor: colors.lipstick,
    minHeight: hp("10%"),
    paddingHorizontal: wp("5%"),
    paddingTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});
