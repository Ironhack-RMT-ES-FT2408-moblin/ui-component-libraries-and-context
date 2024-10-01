import { createContext, useState } from "react";

// component contexto => se encarga de compartir la data por toda la app
const ThemeContext = createContext()


// component envoltorio => se encarga de almacenar la data a compartir 
function ThemeWrapper(props) {

  const [ isDarkTheme, setIsDarkTheme ] = useState(false)

  const toggletheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  // objeto passedContext que tendra todos los valores a compatir
  const passedContext = {
    isDarkTheme,
    toggletheme
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeWrapper
}