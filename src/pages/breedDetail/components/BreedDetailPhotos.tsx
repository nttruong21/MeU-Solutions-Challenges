import { FC } from 'react'

import { Container } from '~/components'
import { BreedImage } from '~/types/breed.type'

interface Props {
  breedImages?: Array<BreedImage>
}

const BreedDetailPhotos: FC<Props> = ({ breedImages }) => {
  return (
    <Container>
      {breedImages && (
        <div className='flex flex-col gap-8'>
          <div className='text-2xl sm:text-4xl font-semibold'>Other photos</div>
          <div className='flex flex-wrap -mx-4 gap-y-6'>
            {breedImages.map((image) => (
              <div key={image.id} className='w-full h-full sm:w-1/2 md:w-1/4 px-4'>
                <div
                  className='w-full rounded-3xl aspect-square bg-center bg-cover'
                  style={{ backgroundImage: `url(${image.url})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  )
}

export default BreedDetailPhotos
