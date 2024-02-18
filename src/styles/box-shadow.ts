import { Platform } from "react-native";

import { colors } from "./colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: colors.text[900],
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
        shadowColor: colors.text[900],
      },
    }),
  },
});
