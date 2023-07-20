import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

import { Container } from '~/components'
import { routesConfig } from '~/configs/routes.config'

const HomeReason = () => {
  return (
    <Container>
      <Container>
        <div className='flex flex-col md:flex-row -mx-4 gap-y-10 items-center'>
          <div className='w-full md:w-1/2 px-0 md:px-4 '>
            <div className='flex flex-col gap-10'>
              <span className='text-4xl md:text-5xl font-bold'>Why should you have a cat?</span>
              <span className='text-sm md:text-base font-medium'>
                Having a cat around you can actually trigger the release of calming chemicals in your body which lower
                your stress and anxiety leves
              </span>
              <Link to={routesConfig.readMore}>
                <div className='flex items-center gap-2 opacity-60'>
                  <span className='text-sm md:text-base font-bold'>READ MORE</span>
                  <span>
                    <ArrowRightAltIcon />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className='w-full md:w-1/2 px-0 md:px-4'>
            <div className='grid grid-cols-2 auto-rows-auto gap-2 md:gap-4'>
              <img src='src/assets/images/home-bottom-2.webp' alt='' />
              <div className='row-span-2'>
                <img src='src/assets/images/home-bottom-3.webp' alt='' />
              </div>
              <div className='flex justify-end'>
                <img src='src/assets/images/home-bottom-1.webp' alt='' />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default HomeReason
