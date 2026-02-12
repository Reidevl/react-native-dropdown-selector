// Main component
export { DropdownSelector } from "./components/DropdownSelector";
export type {
  DropdownOption,
  DropdownSelectorProps,
} from "./components/DropdownSelector/DropdownSelector.props";

// Sub-components (for advanced usage)
export { OptionsList } from "./components/OptionsList";
export type { OptionsListProps } from "./components/OptionsList/OptionsList.props";

export { SelectorItem } from "./components/SelectorItem";
export type { SelectorItemProps } from "./components/SelectorItem/SelectorItem.props";

// Theme
export { useDropdownTheme } from "./hooks/useDropdownTheme";
export type { UseDropdownThemeOptions } from "./hooks/useDropdownTheme";

export { getDefaultTheme } from "./theme/colors";
export type { DropdownTheme, ThemeMode } from "./theme/types";
