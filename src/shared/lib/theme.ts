export type ThemePreference = "light" | "dark";

export const THEME_STORAGE_KEY = "usb-theme";
export const THEME_CHANGE_EVENT = "usb-theme-change";

export function getStoredTheme(): ThemePreference | null {
  if (typeof window === "undefined") return null;

  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function setStoredTheme(theme: ThemePreference) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function clearStoredTheme() {
  localStorage.removeItem(THEME_STORAGE_KEY);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function applyTheme(theme: ThemePreference | null) {
  const root = document.documentElement;

  if (theme === "light" || theme === "dark") {
    root.dataset.theme = theme;
    return;
  }

  delete root.dataset.theme;
}

export function getSystemDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function getEffectiveTheme(stored: ThemePreference | null): ThemePreference {
  return stored ?? (getSystemDark() ? "dark" : "light");
}

export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}})();`;
