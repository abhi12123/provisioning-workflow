import React from "react";
import type { JSX, ReactNode } from "react";
import theme from "./theme";
import "../styles.css";

interface ThemeObject {
  [key: string]: string | number | ThemeObject;
}

function flatten(
  obj: ThemeObject,
  prefix = ""
): Record<string, string | number> {
  return Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? `${prefix}-${key}` : key;
    const value = obj[key];

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(acc, flatten(value as ThemeObject, pre));
    } else {
      acc[pre] = value as string | number;
    }

    return acc;
  }, {} as Record<string, string | number>);
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const cssVars = flatten(theme);

  return (
    <>
      <style jsx global>{`
        :root {
          ${Object.entries(cssVars)
            .map(([key, value]) => `--${key}: ${value};`)
            .join("\n")}
          --font-family-base: "Inter", sans-serif;
        }
      `}</style>
      <div className="theme-wrapper">{children}</div>
    </>
  );
};

export default ThemeProvider;
