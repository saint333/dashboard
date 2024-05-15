import { globalCase } from "../common/GlobalConstants"

export const reducerglobal = (state, action) => {
  switch (action.type) {
    case globalCase.THEME:
      return { ...state, theme: action.theme }
    case globalCase.FULLSCREEN:
      return { ...state, isFullScreen: action.isFullScreen }
    default:
      return state
  }
}