import { useState, useEffect } from 'react'
import axios from 'axios'

import { Container } from '~/components'
import { BreedSummary, BreedSummaryResponse } from '~/types/breed.type'

const TopSearchedPage = () => {
  const [topSearchedBreedsSummary, setTopSearchedBreedsSummary] = useState<Array<BreedSummary>>()

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/breeds?limit=10')
      .then((response) => {
        const breedSummaryList = response.data as Array<BreedSummaryResponse>
        setTopSearchedBreedsSummary(
          breedSummaryList.map((breedSummaryItem) => ({
            id: breedSummaryItem.id,
            name: breedSummaryItem.name,
            imageId: breedSummaryItem.reference_image_id,
            description: breedSummaryItem.description
          }))
        )
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='pb-10'>
      <Container>
        <h1 className='text-2xl md:text-4xl font-bold mb-10'>Top 10 most searched breeds</h1>

        <div className='flex flex-col gap-10'>
          {topSearchedBreedsSummary &&
            topSearchedBreedsSummary.map((breedSummary, index) => (
              <div key={breedSummary.id} className='flex flex-col-reverse sm:flex-row gap-5 md:gap-10'>
                <div
                  className='w-[200px] aspect-square bg-center bg-cover rounded-3xl'
                  style={{ backgroundImage: `url(https://cdn2.thecatapi.com/images/${breedSummary.imageId}.jpg)` }}
                ></div>
                <div className='flex-1 flex flex-col gap-3 md:gap-6'>
                  <h2 className='text-2xl md:text-4xl font-semibold'>
                    {index + 1}. {breedSummary.name}
                  </h2>
                  <p className='text-sm md:text-base font-medium'>{breedSummary.description}</p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default TopSearchedPage
