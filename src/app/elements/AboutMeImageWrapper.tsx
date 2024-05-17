import Image from 'next/image'

export const AboutMeImageWrapper = () => {
  return (
    <div className='container flex justify-center'>
      <div className='box aspect-square max-sm:h-[200px] max-sm:w-[250px] sm:h-[200px] sm:w-[250px]'>
        <div className='spin-container'>
          <div className='shape'>
            <div className='bd'>
              <Image
                src='/images/about-me/Cartoon.png'
                alt='Caricature Image'
                sizes='1000%'
                fill
                priority
                fetchPriority='high'
                className='aspect-square'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
