import { useMemo } from "react";
import { useColorScheme, ColorSchemeName } from "react-native";
import { DropdownTheme, ThemeMode } from "../theme/types";
import { getDefaultTheme } from "../theme/colors";

export interface UseDropdownThemeOptions {
  theme?: DropdownTheme;
  mode?: ThemeMode;
}

export const useDropdownTheme = (
  options?: UseDropdownThemeOptions
): DropdownTheme => {
  const systemColorScheme = useColorScheme();
  const mode: ThemeMode =
    options?.mode ?? ((systemColorScheme as ThemeMode) ?? "light");

  return useMemo(() => {
    if (options?.theme) {
      return options.theme;
    }
    return getDefaultTheme(mode);
  }, [options?.theme, mode]);
};
