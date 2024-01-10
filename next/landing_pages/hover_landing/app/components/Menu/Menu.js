import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Menu.module.scss'
import { menuData } from './menu_data'
const Menu = ({ menuOpen, handleMenu, mainContainerRef }) => {
  const menuRef = useRef(null)
  console.log(menuOpen)
  useEffect(() => {
    const menu = menuRef.current
    const mainContainer = mainContainerRef.current

    gsap.set(menu, { pointerEvents: 'none', autoAlpha: 0 })

    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.92,
        ease: 'expo.inOut',
      },
      onComplete: () => {
        menu.computedStyleMap.pointerEvents = menuOpen ? 'auto' : 'none'
        if (!menuOpen) {
          handleMenu()
        }
      },
    })

    tl.to(
      menu,
      {
        autoAlpha: 1,
        stagger: 0.02,
        pointerEvents: 'auto',
      },
      0
    )

    tl.to(
      mainContainer,
      {
        x: menuOpen ? '-50rem' : '0',
      },
      0
    ).to(
      'body',
      {
        backgroundColor: menuOpen ? '#111111' : 'var(--primary)',
        overflow: menuOpen ? 'hidden' : 'auto',
        pointerEvents: menuOpen ? 'none' : 'auto',
      },
      0
    )

    if (menuOpen) {
      tl.play()
    } else {
      tl.reverse()
    }
  }, [menuOpen, handleMenu, mainContainerRef])

  return (
    <div className={styles.menu} ref={menuRef}>
      <div className={styles.menu_wrapper}>
        {menuData.map((data) => {
          return <MenuList key={data.title} data={data} />
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
    <div className={styles.menu_list}>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles.menu_list_item}>
            <a href={item.link}>{item.title}</a>
          </div>
        )
      })}
    </div>
  )
}
