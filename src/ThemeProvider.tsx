// src/ThemeProvider.tsx
import React, { createContext, useMemo, useState, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Define the shape of our context
interface ColorModeContextType {
  toggleColorMode: () => void;
}

// Create the context with a default value
export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export default function CustomThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
