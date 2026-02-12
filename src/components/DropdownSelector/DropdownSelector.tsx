import React, { useState, useRef, useCallback } from "react";
import { View, Pressable, TextInput, Text } from "react-native";
import { OptionsList } from "../OptionsList";
import { useDropdownTheme } from "../../hooks/useDropdownTheme";
import { DropdownSelectorProps } from "./DropdownSelector.props";
import { styles } from "./styles";

export const DropdownSelector = ({
  value,
  onValueChange,
  options,
  label,
  placeholder = "Select...",
  error = false,
  errorMessage,
  disabled = false,
  mode = "flat",
  theme,
  style,
  inputStyle,
  textStyle,
  labelStyle,
  errorStyle,
  iconComponent,
}: DropdownSelectorProps) => {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  const dropdownRef = useRef<View>(null);
  const dropdownTheme = useDropdownTheme({ theme });

  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : "";

  const toggleDropdown = useCallback(() => {
    if (!disabled) {
      setVisible(!visible);
      setFocused(!visible);
    }
  }, [visible, disabled]);

  const closeDropdown = useCallback(() => {
    setVisible(false);
    setFocused(false);
  }, []);

  const handleSelect = useCallback(
    (selectedValue: string) => {
      onValueChange(selectedValue);
    },
    [onValueChange]
  );

  const borderColor = error
    ? dropdownTheme.colors.borderError
    : focused
    ? dropdownTheme.colors.borderFocused
    : dropdownTheme.colors.border;

  const textColor = disabled
    ? dropdownTheme.colors.textDisabled
    : dropdownTheme.colors.text;

  const placeholderColor = dropdownTheme.colors.placeholder;

  const renderIcon = () => {
    if (iconComponent) {
      return iconComponent;
    }
    return (
      <Text style={[styles.icon, { color: textColor }]}>
        {visible ? "▲" : "▼"}
      </Text>
    );
  };

  return (
    <>
      <View ref={dropdownRef} style={[styles.container, style]}>
        <Pressable
          onPress={toggleDropdown}
          style={styles.pressable}
          disabled={disabled}
        >
          <View style={styles.innerContainer}>
            {label && mode === "outlined" && (
              <Text
                style={[
                  styles.label,
                  {
                    color: focused
                      ? dropdownTheme.colors.borderFocused
                      : error
                      ? dropdownTheme.colors.borderError
                      : dropdownTheme.colors.text,
                  },
                  labelStyle,
                ]}
              >
                {label}
              </Text>
            )}
            <View
              style={[
                styles.inputContainer,
                mode === "outlined" && styles.inputOutlined,
                {
                  borderColor,
                  backgroundColor: dropdownTheme.colors.background,
                },
                error && styles.inputError,
                disabled && styles.inputDisabled,
                inputStyle,
              ]}
            >
              <TextInput
                value={displayValue}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                editable={false}
                pointerEvents="none"
                style={[
                  styles.input,
                  {
                    color: textColor,
                  },
                  textStyle,
                ]}
              />
              <View style={styles.iconContainer}>{renderIcon()}</View>
            </View>
          </View>

          <OptionsList
            visible={visible}
            options={options}
            selectedValue={value}
            onSelect={handleSelect}
            onClose={closeDropdown}
            componentRef={dropdownRef}
            backgroundColor={dropdownTheme.colors.background}
            textColor={dropdownTheme.colors.text}
            selectedBackgroundColor={dropdownTheme.colors.backgroundSelected}
            selectedTextColor={dropdownTheme.colors.textSelected}
          />
        </Pressable>
      </View>

      {errorMessage && (
        <Text
          style={[
            styles.errorMessage,
            { color: dropdownTheme.colors.errorText },
            errorStyle,
          ]}
        >
          {errorMessage}
        </Text>
      )}
    </>
  );
};
