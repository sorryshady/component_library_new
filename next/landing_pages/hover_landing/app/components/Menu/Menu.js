import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Menu.module.scss'
import { menuData } from './menu_data'
const Menu = ({ menuOpen, handleMenu, mainContainerRef }) => {
  const menu = useRef()
  const tl = useRef()

  useEffect(() => {
    const menuList = gsap.utils.toArray('.menu_list_ref')
    const links = gsap.utils.toArray('.link')

    gsap.set(menu.current, { pointerEvents: 'none', autoAlpha: 0 })
    gsap.set(links, { color: 'red' })
    tl.current = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.92,
        ease: 'expo.inOut',
      },
    })

    tl.current.to(
      menu.current,
      {
        autoAlpha: 1,
        stagger: 0.02,
        pointerEvents: 'auto',
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
          <div key={item.id} className={`link ${styles.menu_list_item}`}>
            <a href={item.link}>{item.title}</a>
          </div>
        )
      })}
    </>
  )
}

