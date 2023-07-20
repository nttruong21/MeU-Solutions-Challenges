import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { BreedDetailInfo, BreedDetailPhotos } from './components'
import { BreedDetailResponse, BreedImage, BreedImageResponse } from '~/types/breed.type'
import Breed from '~/models/Breed'

const BreedDetailPage = () => {
  const { id } = useParams()

  const [breedDetail, setBreedDetail] = useState<Breed>()
  const [breedImages, setBreedImages] = useState<Array<BreedImage>>()

  // Get breed detail information
  useEffect(() => {
    if (!id) {
      return
    }
    axios
      .get(`https://api.thecatapi.com/v1/breeds/${id}`)
      .then((response) => {
        const data = response.data as BreedDetailResponse
        const breed = Breed.fromRequestResponse(data)
        setBreedDetail(breed)
      })
      .catch((error) => console.error(error))
  }, [])

  // Get 10 breed images
  useEffect(() => {
    if (!id) {
      return
    }
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=10`)
      .then((response) => {
        const data = response.data as Array<BreedImageResponse>
        setBreedImages(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='pb-10 flex flex-col gap-10'>
      <BreedDetailInfo breedDetail={breedDetail} />
      <BreedDetailPhotos breedImages={breedImages} />
    </div>
  )
}

export default BreedDetailPage
