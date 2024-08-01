import React from 'react'
import Sidebar from '../../components/Sidebar'
import MessageSection from '../../components/messages/MessageSection'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-100 bg-clip-padding'>
    <Sidebar />
    <MessageSection />
  </div>
  )
}

export default Home