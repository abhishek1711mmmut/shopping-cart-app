import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-center items-center gap-10'>
      <div className='spinner'></div>
      <div className='text-green-700 text-xl font-semibold opacity-70'>Loading...</div>
    </div>
  )
}

export default Spinner