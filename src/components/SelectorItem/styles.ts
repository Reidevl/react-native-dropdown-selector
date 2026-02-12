import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  menuItem: {
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItemTitle: {
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 20,
    textAlign: "left",
    width: "100%",
  },
  selectedItem: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
  selectedItemTitle: {
    fontWeight: "500",
  },
  pressedItem: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
});
