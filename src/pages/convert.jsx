import Head from 'next/head'

import Converter from '../components/Converter'

const Convert = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <Head>
        <title>Converter - Neptune Mutual</title>
      </Head>
      <div className='h1/2 w-1/2'>
        <Converter />
      </div>
    </div>
  )
}

export default Convert
