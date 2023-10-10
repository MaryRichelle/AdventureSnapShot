import React, { createContext, useState } from 'react'

const themes = {
  dark: {
    background: "#03132d"
    , color: "white"
  },
  light: {
    background: '#f5f6fa', color: '#374151'
  }
};

export const ThemesContext = createContext()

const Themes = ({ children }) => {
  const [isDark, setDark] = useState(true)
  const theme = isDark ? themes.dark : themes.light
  function toggleThemes() {
    setDark(!isDark)
  }
  const value = [{ isDark, theme }, toggleThemes]

  return (
    <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
  )
}

export default Themes 