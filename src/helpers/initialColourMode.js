export default function getInitialColor() {
  const persistedColorPref = window.localStorage.getItem("color-mode");
  const hasPersistedPref = typeof persistedColorPref === "string";

  if (hasPersistedPref) {
    return persistedColorPref;
  }

  const userPref = window.matchMedia("(prefers-color-scheme: dark)");
  const userHasPref = typeof userPref.matches === "boolean";

  if (userHasPref) {
    return userPref.matches ? "dark" : "light";
  }

  return "light";
}
