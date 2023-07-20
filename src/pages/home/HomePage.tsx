import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

import { Container } from '~/components'
import { HomeReason, HomeMostSearchedBreeds, HomeBanner, HomeSearchNav } from './components'
import { BreedSummary, BreedSummaryResponse } from '~/types/breed.type'

export const HomePageContext = createContext<{
  breedsSummaryList?: Array<BreedSummary>
}>({
  breedsSummaryList: undefined
})

const HomePage = () => {
  const [isShowSearchNav, setIsShowSearchNav] = useState<boolean>(false)
  const [breedsSummaryList, setBreedsSummaryList] = useState<Array<BreedSummary>>()

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then((response) => {
        const breedSummaryList = response.data as Array<BreedSummaryResponse>
        setBreedsSummaryList(
          breedSummaryList.map((breedSummaryItem) => ({
            id: breedSummaryItem.id,
            name: breedSummaryItem.name,
            imageId: breedSummaryItem.reference_image_id
          }))
        )
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <HomePageContext.Provider value={{ breedsSummaryList }}>
      <div className='pb-10'>
        <HomeSearchNav isVisible={isShowSearchNav} setIsShowSearchNav={setIsShowSearchNav} />

        <Container>
          <HomeBanner setIsShowSearchNav={setIsShowSearchNav} />

          <HomeMostSearchedBreeds mostPopularSearchedBreeds={breedsSummaryList?.slice(0, 4)} />
        </Container>

        <HomeReason />
      </div>
    </HomePageContext.Provider>
  )
}

export default HomePage
