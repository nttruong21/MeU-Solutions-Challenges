const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-[32px] lg:px-[60px] xl:px-[96px]'>
        <div className='flex flex-col md:flex-row justify-between items-left md:items-center px-4 md:px-[32px] lg:px-[60px] xl:px-[96px] py-3 sm:py-5 bg-primary rounded-t-3xl'>
          <span className='text-white text-sm md:text-2xl'>CatWiki</span>
          <div className='flex text-white items-center gap-2'>
            <span className='text-base'>©</span>
            <span className='text-[8px] sm:text-xs md:text-sm'>
              created by <span className='underline font-bold'>nttruong21</span> - devChallenge.io 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
