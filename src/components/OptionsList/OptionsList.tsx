import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Platform,
  ActivityIndicator,
  Text,
  useWindowDimensions,
} from "react-native";
import { SelectorItem } from "../SelectorItem";
import { OptionsListProps } from "./OptionsList.props";
import { styles } from "./styles";

const DROPDOWN_MAX_HEIGHT = 300;
const BOTTOM_PADDING = 16;
const ITEM_HEIGHT = 48;

const getDropdownOffset = (): number => {
  return Platform.OS === "android" ? 40 : 4;
};

const calculateEstimatedHeight = (optionsCount: number): number => {
  return Math.min(DROPDOWN_MAX_HEIGHT, optionsCount * ITEM_HEIGHT);
};

const calculateAvailableSpace = (
  triggerTop: number,
  triggerBottom: number,
  windowHeight: number
): { spaceAbove: number; spaceBelow: number } => {
  const spaceAbove = triggerTop - BOTTOM_PADDING;
  const spaceBelow = windowHeight - triggerBottom - BOTTOM_PADDING;
  return { spaceAbove, spaceBelow };
};

const shouldOpenUpward = (
  spaceBelow: number,
  spaceAbove: number,
  estimatedHeight: number
): boolean => {
  return spaceBelow < estimatedHeight && spaceAbove >= estimatedHeight;
};

interface DropdownPosition {
  top: number | undefined;
  bottom: number | undefined;
  maxHeight: number;
}

const calculateDropdownPosition = (
  triggerTop: number,
  triggerBottom: number,
  spaceAbove: number,
  spaceBelow: number,
  estimatedHeight: number,
  windowHeight: number,
  offset: number
): DropdownPosition => {
  const openUpward = shouldOpenUpward(spaceBelow, spaceAbove, estimatedHeight);

  if (openUpward) {
    return {
      top: undefined,
      bottom: windowHeight - triggerTop - offset,
      maxHeight: Math.min(estimatedHeight, spaceAbove - offset),
    };
  }

  return {
    top: triggerBottom + offset,
    bottom: undefined,
    maxHeight: Math.min(estimatedHeight, spaceBelow - offset),
  };
};

export const OptionsList = ({
  visible,
  options,
  selectedValue,
  onSelect,
  onClose,
  componentRef,
  backgroundColor = "#ffffff",
  textColor = "#000000",
  selectedBackgroundColor,
  selectedTextColor,
  multiple = false,
  style,
  loading = false,
  loadingText = "Loading...",
}: OptionsListProps) => {
  const { height: windowHeight } = useWindowDimensions();
  const [inputWidth, setInputWidth] = useState(0);
  const [dropdownTop, setDropdownTop] = useState<number | undefined>(0);
  const [dropdownBottom, setDropdownBottom] = useState<number | undefined>();
  const [dropdownMaxHeight, setDropdownMaxHeight] =
    useState(DROPDOWN_MAX_HEIGHT);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const shadowColor = "rgba(0, 0, 0, 0.25)";

  useEffect(() => {
    if (!visible || !componentRef.current) {
      return;
    }

    componentRef.current.measureInWindow(
      (fx: number, fy: number, width: number, fheight: number) => {
        const offset = getDropdownOffset();
        const triggerTop = fy;
        const triggerBottom = fy + fheight;

        const { spaceAbove, spaceBelow } = calculateAvailableSpace(
          triggerTop,
          triggerBottom,
          windowHeight
        );

        const estimatedHeight = calculateEstimatedHeight(options.length);
        const position = calculateDropdownPosition(
          triggerTop,
          triggerBottom,
          spaceAbove,
          spaceBelow,
          estimatedHeight,
          windowHeight,
          offset
        );

        setInputWidth(width);
        setDropdownLeft(fx);
        setDropdownTop(position.top);
        setDropdownBottom(position.bottom);
        setDropdownMaxHeight(position.maxHeight);
      }
    );
  }, [visible, componentRef, windowHeight, options.length]);

  const handleSelect = (value: string) => {
    onSelect(value);
    onClose();
  };

  const isSelected = (value: string) => {
    if (multiple && Array.isArray(selectedValue)) {
      return selectedValue.includes(value);
    }
    return selectedValue === value;
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackdrop}>
          <View
            style={[
              styles.dropdownContent,
              {
                backgroundColor,
                minWidth: inputWidth,
                width: inputWidth,
                left: dropdownLeft,
                maxHeight: dropdownMaxHeight,
                ...(dropdownBottom !== undefined
                  ? { bottom: dropdownBottom }
                  : { top: dropdownTop ?? 0 }),
              },
              { shadowColor },
              style,
            ]}
          >
            {loading ? (
              <View style={[styles.loadingContainer, { minWidth: inputWidth }]}>
                <ActivityIndicator size="small" color={textColor} />
                <Text style={[styles.loadingText, { color: textColor }]}>
                  {loadingText}
                </Text>
              </View>
            ) : (
              <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                data={options}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => {
                  const itemSelected = isSelected(item.value);
                  return (
                    <SelectorItem
                      key={item.value}
                      value={item.value}
                      label={item.label}
                      onPress={() => handleSelect(item.value)}
                      isSelected={itemSelected}
                      style={{
                        minWidth: inputWidth,
                        ...(itemSelected && selectedBackgroundColor
                          ? { backgroundColor: selectedBackgroundColor }
                          : {}),
                      }}
                      textStyle={{
                        color:
                          itemSelected && selectedTextColor
                            ? selectedTextColor
                            : textColor,
                      }}
                    />
                  );
                }}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
