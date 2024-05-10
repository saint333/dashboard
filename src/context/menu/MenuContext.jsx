'use client'

import { createContext, useContext, useReducer } from "react"
import { menuReducer } from "./MenuReducer"
import { initialMenuState } from "../state/MenuState"

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  return (
    <MenuContext.Provider value={useReducer(menuReducer, initialMenuState)}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuProvider = () => useContext(MenuContext)