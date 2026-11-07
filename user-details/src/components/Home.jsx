import React from 'react'
import students from '../data/students-data'
import { Link } from 'react-router-dom'
// in html we have anchor tag - <a> to navigate bn pages, 
// similarly in react-router-dom we have <Link> tag to navigate bn the pages

const Home = () => {
  return (
    <main className='mx-auto max-w-3xl p-4 sm:p-6'>
        <div className='mb-4 flex items-center justify-between'>
            <h1 className='font-bold text-2xl text-gray-900'>Student Profiles</h1>
            <Link to='/about' className='font-semibold text-orange-600 hover:text-orange-700'>About</Link>
        </div>


        <div className='grid gap-4 sm:grid-cols-2'>
            {
                students.map(student => (
                    <Link
                        key={student.id}
                        to={`/students/${student.id}`}
                        className='border border-gray-200 bg-white rounded-lg p-4 hover:border-orange-500 hover:shadow-md'
                    >
                        <h2 className='font-semibold text-gray-900'>{student.name}</h2>
                        <p className='text-sm text-gray-700'>{student.course}</p>
                        <p className='text-sm text-gray-700'>{student.college}</p>
                    
                    </Link>
                ))
            }
        </div>
    </main>
  )
}

export default Home