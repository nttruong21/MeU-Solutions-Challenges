import { Container } from '~/components'
import Image from '~/assets/images/benefits.webp'

const ReadMorePage = () => {
  return (
    <div className='pb-10'>
      <Container>
        <div className='flex flex-col gap-10'>
          <h1 className='text-2xl md:text-4xl font-bold'>Benefits</h1>
          <img src={Image} alt='' className='rounded-3xl' />
          <p className='text-sm md:text-base font-medium'>
            The research show that people with animals usually are more healthy and happy of they do not have, also we
            know the wonderful that is come back to home of a busy day and hear the satisfaction purr of a lovely cat.
            Is for that, we do not have any doubts that the cats are good pets.
          </p>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2 p-2 shadow-primary shadow-slate-300 rounded-sm'>
              <span>😸</span>
              <span className='text-sm md:text-base font-medium'>
                Has been checked that have a cat reduce the stress and are big companion for those who feel sad or
                depressed.
              </span>
            </div>

            <div className='flex gap-2 p-2 shadow-primary shadow-slate-300 rounded-sm'>
              <span>😸</span>
              <span className='text-sm md:text-base font-medium'>
                Normally, the cat owners have the blood pressure lower than others without cats.
              </span>
            </div>

            <div className='flex gap-2 p-2 shadow-primary shadow-slate-300 rounded-sm'>
              <span>😸</span>
              <span className='text-sm md:text-base font-medium'>
                Your immune system will be stronger and it will allow you to recover faster of sickness.
              </span>
            </div>

            <div className='flex gap-2 p-2 shadow-primary shadow-slate-300 rounded-sm'>
              <span>😸</span>
              <span className='text-sm md:text-base font-medium'>
                For general, the kids that are growing with cats get sick less.
              </span>
            </div>

            <div className='flex gap-2 p-2 shadow-primary shadow-slate-300 rounded-sm'>
              <span>😸</span>
              <span className='text-sm md:text-base font-medium'>They have less cares compare from others pets.</span>
            </div>

            <div className='flex gap-2 p-2 shadow-primary shadow-slate-300 rounded-sm'>
              <span>😸</span>
              <span className='text-sm md:text-base font-medium'>
                They help you to recover faster from an emotional trauma like the pass away of a loved.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ReadMorePage
