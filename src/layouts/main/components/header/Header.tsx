import { Link } from 'react-router-dom'

import { Container } from '~/components'
import Logo from '~/assets/images/logo.svg'
import { routesConfig } from '~/configs/routes.config'

const Header = () => {
  return (
    <Container>
      <Link to={routesConfig.home} className='text-primary'>
        <img src={Logo} alt='' />
      </Link>
    </Container>
  )
}

export default Header
