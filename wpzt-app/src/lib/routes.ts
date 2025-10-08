const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
    return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
  }
  
  export const getAllGamesRoute = () => '/'
  
  export const viewGameRouteParams = getRouteParams({ gameNick: true })
  export type ViewGameRouteParams = typeof viewGameRouteParams
  export const getViewGameRoute = ({ gameNick }: ViewGameRouteParams) => `/games/${gameNick}`

  export const getNewGameRoute = () => '/games/new'
  export const getProfileRoute = () => '/profile'
  export const getRegRoute = () => '/register'

  // Convenience exports for direct usage
  export const main = getAllGamesRoute()
  export const newGame = getNewGameRoute()
  export const profile = getProfileRoute()
  export const register = getRegRoute()