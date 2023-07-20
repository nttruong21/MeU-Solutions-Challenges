import * as pages from '~/pages'
import * as layouts from '~/layouts'

const routesConfig = {
  home: '/',
  breedDetail: '/breeds/:id',
  topSearched: '/top-searched',
  readMore: '/more'
}

const routes = [
  {
    path: routesConfig.home,
    component: pages.HomePage,
    layout: layouts.MainLayout
  },
  {
    path: routesConfig.breedDetail,
    component: pages.BreedDetailPage,
    layout: layouts.MainLayout
  },
  {
    path: routesConfig.topSearched,
    component: pages.TopSearchedPage,
    layout: layouts.MainLayout
  },
  {
    path: routesConfig.readMore,
    component: pages.ReadMorePage,
    layout: layouts.MainLayout
  }
]

export { routesConfig, routes }
