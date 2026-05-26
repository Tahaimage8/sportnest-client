"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};

export default Providers;