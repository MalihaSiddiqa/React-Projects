import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
      <main className='flex items-center justify-center min-h-screen flex-col bg-black p-4 sm:p-6'>
        <p className='mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6 text-gray-700'>
           <span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 bg-gray-200 m-1'>
            i
            </span>
            This is not the page you are looking for!
            </p>
        <Link to='/' className='font-semibold bg-orange-600 text-white hover:border hover:border-orange-600 hover:text-orange-600 hover:bg-white p-2 m-4 rounded-md '>
        Back to home
        </Link>

      </main>

  )
}

export default NotFound
