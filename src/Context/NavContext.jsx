/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const NavBarContext = createContext()
export const NavBarColorContext = createContext()

const NavContext = ({ children }) => {

  const [navOpen, setNavOpen] = useState(false);
  const [NavColor, setNavColor] = useState(null)

  const locate = useLocation().pathname;
  console.log(locate)

  useEffect(() => {
    if(locate == '/'){
      setNavColor('white')
    }else{
      setNavColor('black')
    }
  }, [locate])
  



  return (
    <div>
      <NavBarContext.Provider value={[navOpen, setNavOpen]}>
        <NavBarColorContext.Provider value={[NavColor, setNavColor]}>
          {children}
        </NavBarColorContext.Provider>
      </NavBarContext.Provider>
    </div>
  )
}

export default NavContext