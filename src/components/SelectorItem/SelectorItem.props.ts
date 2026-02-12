import { ViewStyle, TextStyle } from "react-native";

export interface SelectorItemProps {
  value: string;
  label: string;
  onPress: () => void;
  isSelected: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
