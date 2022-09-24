import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 60 : 0,
    // paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
