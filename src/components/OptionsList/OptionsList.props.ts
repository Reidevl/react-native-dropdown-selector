import { ViewStyle, View } from "react-native";
import { RefObject } from "react";
import { DropdownOption } from "../DropdownSelector";

export interface OptionsListProps {
  visible: boolean;
  options: readonly DropdownOption[];
  selectedValue?: string | string[];
  onSelect: (value: string) => void;
  onClose: () => void;
  componentRef: RefObject<View | null>;
  backgroundColor?: string;
  textColor?: string;
  selectedBackgroundColor?: string;
  selectedTextColor?: string;
  multiple?: boolean;
  style?: ViewStyle;
  loading?: boolean;
  loadingText?: string;
}
