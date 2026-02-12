import React from "react";
import { Pressable, Text } from "react-native";
import { SelectorItemProps } from "./SelectorItem.props";
import { styles } from "./styles";

export const SelectorItem = ({
  value,
  label,
  onPress,
  isSelected,
  style,
  textStyle,
}: SelectorItemProps) => {
  return (
    <Pressable
      key={value}
      onPress={onPress}
      style={({ pressed }) => [
        styles.menuItem,
        isSelected && styles.selectedItem,
        pressed && styles.pressedItem,
        style,
      ]}
    >
      <Text
        style={[
          styles.menuItemTitle,
          isSelected && styles.selectedItemTitle,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};
