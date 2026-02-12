import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  pressable: {
    flex: 1,
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    minHeight: 56,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    marginLeft: 4,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    minHeight: 56,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputOutlined: {
    borderWidth: 1,
    borderRadius: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
  },
  inputError: {
    borderWidth: 1,
  },
  inputDisabled: {
    opacity: 0.6,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    width: 24,
  },
  icon: {
    fontSize: 12,
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
