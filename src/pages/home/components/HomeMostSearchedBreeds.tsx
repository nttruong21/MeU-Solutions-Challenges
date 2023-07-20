import { FC } from 'react'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

import { Container } from '~/components'
import { routesConfig } from '~/configs/routes.config'
import { BreedSummary } from '~/types/breed.type'

interface Props {
  mostPopularSearchedBreeds?: Array<BreedSummary>
}

const HomeMostSearchedBreeds: FC<Props> = ({ mostPopularSearchedBreeds }) => {
  return (
    mostPopularSearchedBreeds && (
      <div className='bg-secondary rounded-b-3xl'>
        <Container>
          <div className='pb-7 flex flex-col gap-4 md:gap-10'>
            <div>
              <span className='text-primary text-xs sm:text-lg font-bold border-b-2 border-primary'>
                Most Searched Breeds
              </span>
            </div>
            <div className='flex flex-col md:flex-row items-end gap-2 justify-between'>
              <div className='w-full md:w-2/3 lg:w-1/2 text-lg md:text-2xl lg:text-5xl font-bold'>
                66+ Breeds For you to discover
              </div>
              <Link to={routesConfig.topSearched}>
                <div className='flex items-center gap-2'>
                  <span className='text-sm sm:text-base font-bold'>SEE MORE</span>
                  <span>
                    <ArrowRightAltIcon />
                  </span>
                </div>
              </Link>
            </div>
            <div className='flex flex-wrap md:flex-nowrap -mx-2 lg:-mx-4 gap-y-4'>
              {mostPopularSearchedBreeds.map((breed) => (
                <Link
                  to={`/breeds/${breed.id}`}
                  key={breed.id}
                  className='w-1/2 md:w-1/4 px-2 lg:px-4 flex flex-col gap-2'
                >
                  <div
                    className='w-full bg-center bg-cover rounded-3xl aspect-square'
                    style={{ backgroundImage: `url(https://cdn2.thecatapi.com/images/${breed.imageId}.jpg)` }}
                  ></div>
                  <span className='text-xs sm:text-base font-semibold'>{breed.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    )
  )
}

export default HomeMostSearchedBreeds
