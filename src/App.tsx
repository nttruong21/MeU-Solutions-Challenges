import { ReactNode, FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { routes } from '~/configs/routes.config'
import { useScrollToTop } from '~/hooks'
import './App.scss'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <App>
                <route.layout>
                  <route.component />
                </route.layout>
              </App>
            }
          />
        ))}
      </Routes>
    </Router>
  )
}

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = ({ children }) => {
  useScrollToTop()

  return <>{children}</>
}

export default AppRoutes
