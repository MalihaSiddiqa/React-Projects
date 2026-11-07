import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
      <main className='mx-auto max-w-3xl p-4 sm:p-6'>
        <Link to='/' className='font-semibold text-orange-600 hover:text-orange-700'>Back</Link>

        <p className='mt-4 rounded-lg border border-gray-200 bg-white p-6 text-gray-700'>Student Profiles lists the students in our class room. Click on a student to see their details.</p>
      </main>
  )
}

export default About