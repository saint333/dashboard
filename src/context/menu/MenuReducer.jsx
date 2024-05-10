import { menuCase } from "../common/MenuConstants"

export const menuReducer = (state, action) => {
  switch (action.type) {
    case menuCase.TOGGLED:
      return { ...state, toggled: !state.toggled }
    case menuCase.COLLAPSED:
      return { ...state, collapsed: !state.collapsed }
    case menuCase.ALL:
      return { ...state, collapsed: action.collapsed, toggled: action.toggled }
    default:
      return state
  }
}