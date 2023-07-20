import HomePage from '~/pages/home/HomePage'
import SearchPage from '~/pages/search/SearchPage'

const routesConfig = {
  home: '/',
  search: '/search'
}

const routes = [
  {
    path: routesConfig.home,
    component: HomePage
  },
  {
    path: routesConfig.search,
    component: SearchPage
  }
]

export default routes
