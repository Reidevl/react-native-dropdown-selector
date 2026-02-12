import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dropdownContent: {
    borderRadius: 8,
    elevation: 8,
    maxHeight: 300,
    position: "absolute",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  flatList: {
    borderRadius: 8,
    maxHeight: 300,
  },
  loadingContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    minHeight: 60,
    padding: 16,
  },
  loadingText: {
    fontSize: 14,
    marginLeft: 8,
  },
  modalBackdrop: {
    elevation: 3,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});
