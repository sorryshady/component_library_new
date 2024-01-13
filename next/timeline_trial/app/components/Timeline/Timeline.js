'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Timeline.css'
const Timeline = () => {
  const [year, setYear] = useState('2015')
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const achievements = document.querySelectorAll('.achievement')
    const options = {
      threshold: 0.9,
    }
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setYear(entry.target.id)
        }
      })
    }
    const observer = new IntersectionObserver(callback, options)

    achievements.forEach((section) => observer.observe(section))
  }, [])
  useEffect(() => {
    let ctx = gsap.context(() => {
      const achievements = gsap.utils.toArray('.achievement')
      gsap.set('.achievement:not(:first-child)', {
        opacity: 0,
        scale: 0.5,
      })
      const animation = gsap.to('.achievement:not(:first-child)', {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      })
      ScrollTrigger.create({
        trigger: '.timeline',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.years',
        markers: true,
        animation: animation,
        scrub: true,
      })
    })
    return () => ctx.revert()
  }, [])
  return (
    <>
      <div className='spacer'></div>
      <div className='container'>
        <div className='timeline'>
          <div className='years'>
            <div className={`year ${year === '2015' ? 'active' : ''}`}>
              2015
            </div>
            <div className={`year ${year === '2016' ? 'active' : ''}`}>
              2016
            </div>
            <div className={`year ${year === '2017' ? 'active' : ''}`}>
              2017
            </div>
            <div className={`year ${year === '2018' ? 'active' : ''}`}>
              2018
            </div>
            <div className={`year ${year === '2019' ? 'active' : ''}`}>
              2019
            </div>
            <div className={`year ${year === '2020' ? 'active' : ''}`}>
              2020
            </div>
            <div className={`year ${year === '2021' ? 'active' : ''}`}>
              2021
            </div>
          </div>
          <div className='achievements'>
            <div className='achievement' id='2015'>
              Did project 1
            </div>
            <div className='achievement' id='2016'>
              Did project 2
            </div>
            <div className='achievement' id='2017'>
              Did project 3
            </div>
            <div className='achievement' id='2018'>
              Did project 4
            </div>
            <div className='achievement' id='2019'>
              Did project 5
            </div>
            <div className='achievement' id='2020'>
              Did project 6
            </div>
            <div className='achievement' id='2021'>
              Did project 7
            </div>
          </div>
        </div>
      </div>
      <div className='spacer'></div>
      <div className='spacer'></div>
      <div className='spacer'></div>
    </>
  )
}

export default Timeline
