import { FC } from 'react'
import clsx from 'clsx'

import { Container } from '~/components'
import Breed from '~/models/Breed'

interface Props {
  breedDetail?: Breed
}

const Bar = ({ active = false }: { active?: boolean }) => {
  return <div className={clsx('w-full h-[12px] rounded-xl', active ? 'bg-[#544439]' : 'bg-[#E0E0E0]')}></div>
}

const BreedDetailInfo: FC<Props> = ({ breedDetail }) => {
  const handleBars = (prefix: string, value: number): Array<JSX.Element> => {
    const bars: Array<JSX.Element> = []
    for (let i = 0; i < 5; i++) {
      bars.push(
        <div key={`${prefix}-${i}`} className='px-1 w-1/5'>
          <Bar active={i < value} />
        </div>
      )
    }
    return bars
  }

  return (
    <Container>
      {breedDetail && (
        <div className='flex flex-col sm:flex-row justify-between items-start gap-10 lg:gap-24'>
          <div
            className='w-full sm:w-[200px] md:w-[250px] lg:w-[350px] bg-center bg-cover rounded-3xl aspect-square'
            style={{ backgroundImage: `url(https://cdn2.thecatapi.com/images/${breedDetail.imageId}.jpg)` }}
          ></div>
          <div className='flex-1 w-full md:w-2/3 flex -mx-1 flex-col gap-6'>
            <span className='text-2xl md:text-4xl font-semibold'>{breedDetail.name}</span>
            <p className='text-sm md:text-base font-medium'>{breedDetail.description}</p>
            <div>
              <span className='text-sm md:text-base font-bold'>Temperament:</span>{' '}
              <span className='text-sm md:text-base font-medium'>{breedDetail.temperament}</span>
            </div>
            <div>
              <span className='text-sm md:text-base font-bold'>Origin:</span>{' '}
              <span className='text-sm md:text-base font-medium'>{breedDetail.origin}</span>
            </div>
            <div>
              <span className='text-sm md:text-base font-bold'>Life Span:</span>{' '}
              <span className='text-sm md:text-base font-medium'>{breedDetail.lifeSpan}</span>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
              <div className='text-sm md:text-base font-bold w-full md:w-1/3'>Adaptability:</div>
              <div className='w-full md:w-2/3 flex -mx-1'>
                {...handleBars(`${breedDetail.id}-adaptability`, breedDetail.adaptability)}
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
              <span className='text-sm md:text-base font-bold w-full md:w-1/3'>Affection level:</span>
              <div className='w-full md:w-2/3 flex -mx-1'>
                {...handleBars(`${breedDetail.id}-affectionLevel`, breedDetail.affectionLevel)}
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
              <span className='text-sm md:text-base font-bold w-full md:w-1/3'>Child Friendly:</span>
              <div className='w-full md:w-2/3 flex -mx-1'>
                {...handleBars(`${breedDetail.id}-childFriendly`, breedDetail.childFriendly)}
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
              <span className='text-sm md:text-base font-bold w-full md:w-1/3'>Grooming:</span>
              <div className='w-full md:w-2/3 flex -mx-1'>
                {...handleBars(`${breedDetail.id}-grooming`, breedDetail.grooming)}
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
              <span className='text-sm md:text-base font-bold w-full md:w-1/3'>Intelligence:</span>
              <div className='w-full md:w-2/3 flex -mx-1'>
                {...handleBars(`${breedDetail.id}-intelligence`, breedDetail.intelligence)}
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
              <span className='text-sm md:text-base font-bold w-full md:w-1/3'>Health issues:</span>
              <div className='w-full md:w-2/3 flex -mx-1'>
                {...handleBars(`${breedDetail.id}-healthIssues`, breedDetail.healthIssues)}
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
              <span className='text-sm md:text-base font-bold w-full md:w-1/3'>Social needs:</span>
              <div className='w-full md:w-2/3 flex -mx-1'>
                {...handleBars(`${breedDetail.id}-socialNeeds`, breedDetail.socialNeeds)}
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
              <span className='text-sm md:text-base font-bold w-full md:w-1/3'>Stranger friendly:</span>
              <div className='w-full md:w-2/3 flex -mx-1'>
                {...handleBars(`${breedDetail.id}-strangerFriendly`, breedDetail.strangerFriendly)}
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default BreedDetailInfo
