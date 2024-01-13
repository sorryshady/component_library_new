import React from 'react'
import Filler from './components/Filler/Filler'
import Timeline from './components/Timeline/Timeline'
// import TimeLine from './components/Timeline2/Timeline'
const page = () => {
  return (
    <main className='main'>
      {/* <Filler className={'first'} /> */}
      <Timeline />
      {/* <TimeLine /> */}
      {/* <Filler className={'second'} /> */}
    </main>
  )
}

export default page
