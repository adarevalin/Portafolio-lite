'use client'

import { useRouter } from 'next/router'

const Resume = () => {
  const route = useRouter()
  const locale = route.locale
  const pdfPath = `https://drive.google.com/file/d/1EFDV_l6vChlxTqIrYfyWSGVoiRkQWC_W/view?usp=sharing`
  
  return (
    <div className='w-full h-screen'>
      <embed src={pdfPath} type='application/pdf' className='w-full h-full' />
    </div>
  )
}

export default Resume
