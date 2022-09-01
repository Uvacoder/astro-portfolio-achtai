import { useEffect, useState } from "react";
export default function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  const handleChange = () => {
    setDark(!dark);
    setTheme(dark ? "light" : "dark");
  };

  const setTheme = (theme: string) => {
    document.firstElementChild?.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDark(theme === "dark");
      setTheme(theme);
    }
    if (
      !theme &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDark(true);
      setTheme("dark");
    }

    function onMediaChange(event: MediaQueryListEvent) {
      const theme = event.matches ? "dark" : "light";
      setDark(theme === "dark");
      setTheme(theme);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", onMediaChange);

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", onMediaChange);
  });
  return (
    <button className="themeSwitch" data-theme={dark?'dark':'light'} onClick={handleChange}>
      <svg
        className="themeSwitch_icon themeSwitch_icon-sun"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>

      <svg
        className="themeSwitch_icon themeSwitch_icon-moon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  );
}
