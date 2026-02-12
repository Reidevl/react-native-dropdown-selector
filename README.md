# rn-dropdown-select

[![npm version](https://img.shields.io/npm/v/rn-dropdown-select?logo=npm)](https://www.npmjs.com/package/rn-dropdown-select)

A lightweight, customizable dropdown selector component for React Native built with pure React Native components - no external UI library dependencies required.

## Features

- 🎨 **Zero external UI dependencies** - Built with pure React Native components
- 🎯 **TypeScript support** - Fully typed with TypeScript
- 🌓 **Theme support** - Built-in light/dark theme with customization options
- ♿ **Accessible** - Follows React Native accessibility best practices
- 📱 **Cross-platform** - Works on iOS, Android, and Web
- 🎛️ **Customizable** - Extensive styling and theming options
- 🔄 **React Hook Form compatible** - Easy integration with form libraries

## Installation

```bash
npm install rn-dropdown-select
# or
yarn add rn-dropdown-select
# or
pnpm add rn-dropdown-select
```

## Basic Usage

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import { DropdownSelector, DropdownOption } from "rn-dropdown-select";

const options: DropdownOption[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

export default function App() {
  const [value, setValue] = useState<string>();

  return (
    <View style={{ padding: 20 }}>
      <DropdownSelector
        value={value}
        onValueChange={setValue}
        options={options}
        label="Select an option"
        placeholder="Choose..."
      />
    </View>
  );
}
```

## Usage with React Hook Form

```tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DropdownSelector, DropdownOption } from "rn-dropdown-select";

const options: DropdownOption[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];

interface FormData {
  selection: string;
}

export default function FormExample() {
  const { control, handleSubmit } = useForm<FormData>();

  return (
    <Controller
      control={control}
      name="selection"
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DropdownSelector
          value={value}
          onValueChange={onChange}
          options={options}
          label="Select"
          error={!!error}
          errorMessage={error?.message}
        />
      )}
    />
  );
}
```

## Props

### DropdownSelector

| Prop            | Type                           | Default            | Description                                     |
| --------------- | ------------------------------ | ------------------ | ----------------------------------------------- |
| `value`         | `string \| undefined`          | -                  | Selected value                                  |
| `onValueChange` | `(value: string) => void`      | -                  | Callback when value changes                     |
| `options`       | `readonly DropdownOption[]`    | -                  | Array of options                                |
| `label`         | `string \| undefined`          | -                  | Label text (shown above input in outlined mode) |
| `placeholder`   | `string`                       | `"Seleccionar..."` | Placeholder text                                |
| `error`         | `boolean`                      | `false`            | Show error state                                |
| `errorMessage`  | `string \| undefined`          | -                  | Error message text                              |
| `disabled`      | `boolean`                      | `false`            | Disable the selector                            |
| `mode`          | `"outlined" \| "flat"`         | `"flat"`           | Input style mode                                |
| `theme`         | `DropdownTheme \| undefined`   | -                  | Custom theme object                             |
| `style`         | `ViewStyle \| undefined`       | -                  | Container style                                 |
| `inputStyle`    | `ViewStyle \| undefined`       | -                  | Input container style                           |
| `textStyle`     | `TextStyle \| undefined`       | -                  | Text input style                                |
| `labelStyle`    | `TextStyle \| undefined`       | -                  | Label text style                                |
| `errorStyle`    | `TextStyle \| undefined`       | -                  | Error message style                             |
| `iconComponent` | `React.ReactNode \| undefined` | -                  | Custom icon component                           |

### DropdownOption

```typescript
interface DropdownOption {
  value: string;
  label: string;
}
```

## Theming

The component includes built-in light and dark themes. You can customize the theme by passing a `theme` prop:

```tsx
import { DropdownSelector, DropdownTheme } from "rn-dropdown-select";

const customTheme: DropdownTheme = {
  colors: {
    background: "#ffffff",
    backgroundSelected: "#f0f0f0",
    text: "#000000",
    textSelected: "#000000",
    textDisabled: "#999999",
    border: "#cccccc",
    borderFocused: "#007AFF",
    borderError: "#ff0000",
    errorText: "#ff0000",
    placeholder: "#999999",
    shadow: "#000000",
    icon: "#666666",
    iconDisabled: "#cccccc",
  },
};

<DropdownSelector
  theme={customTheme}
  // ... other props
/>;
```

Or use the `useDropdownTheme` hook:

```tsx
import { useDropdownTheme } from "rn-dropdown-select";

const theme = useDropdownTheme({ mode: "dark" });
```

## Advanced Usage

### Custom Icon

```tsx
import { Ionicons } from "@expo/vector-icons";

<DropdownSelector
  iconComponent={<Ionicons name="chevron-down" size={20} color="#666" />}
  // ... other props
/>;
```

### Accessing Sub-components

For advanced use cases, you can use the sub-components directly:

```tsx
import { OptionsList, SelectorItem } from "rn-dropdown-select";
```

## Requirements

- React >= 16.8.0
- React Native >= 0.70.0

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
