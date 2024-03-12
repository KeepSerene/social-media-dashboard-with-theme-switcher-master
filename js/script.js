const radioBtns = document.querySelectorAll(
  ".toggle__wrapper input[type='radio']"
);

// Set a theme based on preference, local storage, or light/dark mode
const setTheme = (theme) => {
  document.body.className = theme;
  setToggleSwitcher(theme);
};

// Get the previously set theme (if any)
const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    setTheme(theme);
  } else {
    setUserPreferredTheme(); // Fallback to system default
  }
};

// Set the theme based on user preference (light/dark)
const setUserPreferredTheme = () => {
  const theme = matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  setTheme(theme);
};

// Adjust the toggle switcher's position
const setToggleSwitcher = (theme) => {
  theme === "dark" ? radioBtns[0].click() : radioBtns[1].click();
};

// Get the theme on page load
getTheme();

// Manually toggle theme
radioBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const newTheme = btn.id === "dark" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
