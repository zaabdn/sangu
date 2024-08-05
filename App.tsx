/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NetworkProvider } from "@/contexts/networkContext";
import React from "react";
import type { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { MainStackNavigator } from "@/navigator/index";
import { LocalizationProvider } from "@/utils/translation";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NetworkProvider>
        <LocalizationProvider>
          <MainStackNavigator />
        </LocalizationProvider>
      </NetworkProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
