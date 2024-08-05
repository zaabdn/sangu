import React from "react";

import { StyleSheet, View, Modal, Dimensions, ActivityIndicator } from "react-native";

import { colors } from "src/assets/colors";

const { width, height } = Dimensions.get("window");

type LoaderProps = {
  loading: boolean;
};

export default function Loading({ loading }: LoaderProps) {
  return (
    <Modal visible={loading} transparent={true} animationType={"none"}>
      <View style={styles.modalBackground}>
        <View style={styles.backgroundLoading}>
          <ActivityIndicator color={colors.primary} size={35} animating={loading} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
    height: height,
    width: width,
  },
  backgroundLoading: {
    backgroundColor: "#ffffff",
    width: 65,
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
