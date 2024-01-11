'use client'
import React from 'react'
import styles from './Menu.module.scss'
import { menuData } from './menu_data'
const Menu = ({ handleOpen, menuRef }) => {
  return (
    <div className={styles.menu} ref={menuRef}>
      <div className={styles.menu_wrapper}>
        {menuData.map((data, index) => {
          return <MenuList key={index} data={data} />
        })}
        <div className='menu_close' onClick={() => handleOpen(false)}>
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
          <div key={item.id} className={`link ${styles.menu_list_item}`}>
            <a href={item.link}>{item.title}</a>
          </div>
        )
      })}
    </div>
  )
}
