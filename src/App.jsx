import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";

export function App() {
  // state needs to be raise to the parent so both children can use it

  const [isDark, setIsDark] = React.useState(false);

  function toggleDarkMode() {
    setIsDark((prevTheme) => !prevTheme);
  }

  return (
    <>
      <Header darkMode={isDark} toggleDarkMode={toggleDarkMode} />
      <MainComponent darkMode={isDark} />
      <Footer />
    </>
  );
}
