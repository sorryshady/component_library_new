'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Landing.module.scss'
import gsap from 'gsap'
import Image from 'next/image'
import { sectionData } from './section_data'
import Menu from '../Menu/Menu'
const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [toggle, setToggle] = useState(false)
  const menuRef = useRef(null)
  const landing = useRef(null)
  const tl = useRef()

  useEffect(() => {
    const menu = menuRef.current
    const links = gsap.utils.toArray('.link')
    if (window.innerWidth > 768) {
      setActiveIndex(0)
    }

    gsap.set(landing.current, { x: 0 })

    gsap.set(links, { x: '-100%' })

    tl.current = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.92,
        ease: 'expo.inOut',
      },
    })

    tl.current
      .to(
        menu,
        {
          autoAlpha: 1,
          stagger: 0.02,
          pointerEvents: 'auto',
        },
        0
      )
      .to(
        links,
        {
          x: 0,
          stagger: 0.02,
        },
        0
      )

    tl.current
      .to(
        landing.current,
        {
          x: '-50rem',
        },
        0
      )
      .to('.header', { autoAlpha: 0 }, 0)
      .to(
        'body',
        {
          backgroundColor: '#111111',
          overflow: 'hidden',
          pointerEvents: 'none',
        },
        0
      )
  }, [])
  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse()
  }, [toggle])

  const handleHover = (index) => {
    if (window.innerWidth > 768) {
      setActiveIndex(index)
    }
  }

  return (
    <>
      <Menu handleOpen={setToggle} menuRef={menuRef} />
      <div className={styles.main} ref={landing}>
        <div className={styles.section}>
          <div className={styles.section_header}>
            <div className={`header ${styles.section_header_list}`}>
              <div className={styles.section_header_list_item}>
                ArchitExpanse
              </div>
              <div
                className={`--desktop ${styles.section_header_list_item}`}
              ></div>
              <div
                className={`--desktop ${styles.section_header_list_item}`}
              ></div>
              <div
                className={`btn_open ${styles.menu_open} ${styles.section_header_list_item}`}
                onClick={() => setToggle(true)}
              >
                <p>&#x2014;</p>
                <p>&#x2014;</p>
              </div>
            </div>
          </div>
          <div className={styles.section_container}>
            {sectionData.map((data, index) => {
              return (
                <Section
                  key={data.number}
                  index={index}
                  isActive={activeIndex === index}
                  handleHover={handleHover}
                  {...data}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing

const Section = ({
  title,
  number,
  image,
  caption,
  index,
  isActive,
  handleHover,
}) => {
  const hoverHandler = () => {
    handleHover(index)
  }
  return (
    <div
      className={`${styles.section_col} ${isActive ? styles.active : ''}`}
      onMouseEnter={hoverHandler}
    >
      <div className={styles.section_col_media}>
        <Image
          src={image}
          alt=''
          width={100}
          height={100}
          unoptimized={true}
          priority
          className={styles.section_col_image}
        />
      </div>
      <div className={`${styles.section_col_caption} --desktop`}>
        <span>{caption}</span>
      </div>
      <div className={styles.section_col_title}>
        <h2>{title}</h2>
        <p className='--mobile'>Discover more &rarr;</p>
      </div>
      <div className={styles.section_col_number}>
        <h1>{number}</h1>
      </div>
    </div>
  )
}
