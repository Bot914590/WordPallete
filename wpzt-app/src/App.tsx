import MainPage from './pages/MainPage'
import { TrpcProvider } from './lib/trcp'
import * as routes from './lib/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewGamePage from './pages/ViewGamePage'
import './styles/global.scss'
import { Layout } from './components/Layout'
//import { TableBuilder } from './components/TableBuilder'
import NewGamePage from './pages/NewGamePage'
export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.main} element={<MainPage />} />
            <Route path="/games/:gameNick" element={<ViewGamePage />} />
            <Route path="//games/new" element={<NewGamePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}