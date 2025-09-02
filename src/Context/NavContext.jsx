import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const NavBarContext = createContext()

const NavContext = ({children}) => {

    const[navOpen, setNavOpen]= useState(false);

  return (
    <div>
          <NavBarContext.Provider value={[navOpen, setNavOpen]}>
            {children}
          </NavBarContext.Provider>
    </div>
  )
}

export default NavContext