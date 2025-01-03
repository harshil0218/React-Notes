import { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState(0);

  // functions are not defined in theme context so we cant define here it will automatically assing it.
  const lightTheme =() => {
    setThemeMode('light')
  }
  const darkTheme = () =>{
    setThemeMode('dark')

  }

  // acctully changing theme
  // we also need to add darkMode:'class' in tailwind.config.js
  useEffect(() => {
    const html =document.querySelector('html')
    html.classList.remove('dark','light')
    html.classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            <ThemeBtn/>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
