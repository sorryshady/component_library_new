import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Menu.module.scss'
import { menuData } from './menu_data'
const Menu = ({ menuOpen, handleMenu, mainContainerRef }) => {
  const menu = useRef()
  const tl = useRef()

  useEffect(() => {
    const menuContainer = gsap.utils.toArray('.menu_list_ref')
    const anchors = gsap.utils.toArray('.menu_list_item_ref')

    gsap.set(menu.current, { pointerEvents: 'none', autoAlpha: 0 })
    menuContainer.forEach((item) => {
      gsap.set(item, { autoAlpha: 0 })
    })
    anchors.forEach((item) => {
      gsap.set(item, { x: '-100%' })
    })

    tl.current = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.92,
        ease: 'expo.inOut',
      },
    })

    tl.current
      .to(
        menu.current,
        {
          autoAlpha: 1,
          stagger: 0.02,
          pointerEvents: 'auto',
        },
        0
      )
      .to(
        menuContainer,
        {
          autoAlpha: 1,
        },
        0.08
      )
      .to(
        anchors,
        {
          x: 0,
          stagger: 0.016,
        },
        0
      )

    tl.current
      .to(
        mainContainerRef.current,
        {
          x: '-50rem',
        },
        0
      )
      .to(
        'body',
        {
          backgroundColor: '#111111',
          overflow: 'hidden',
          pointerEvents: 'none',
        },
        0
      )
  }, [mainContainerRef])

  useEffect(() => {
    menuOpen ? tl.current.play() : tl.current.reverse()
  }, [menuOpen])

  return (
    <div className={styles.menu} ref={menu}>
      <div className={styles.menu_wrapper}>
        {menuData.map((data) => {
          return (
            <div
              key={Math.random()}
              className={`menu_list_ref ${styles.menu_list}`}
            >
              <MenuList data={data} />
            </div>
          )
        })}
        <div className='menu_close' onClick={() => handleMenu()}>
          <p>&#10005;</p>
        </div>
      </div>
    </div>
  )
}

export default Menu

const MenuList = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={`menu_list_item_ref ${styles.menu_list_item}`}
          >
            <a href={item.link}>{item.title}</a>
          </div>
        )
      })}
    </>
  )
}

