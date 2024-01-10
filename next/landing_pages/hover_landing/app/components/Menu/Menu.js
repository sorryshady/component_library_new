import React from 'react'
import styles from './Menu.module.scss'
import { menuData } from './menu_data'
const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_wrapper}>
        {menuData.map((data) => {
          return <MenuList key={data.title} data={data} />
        })}
        <div className='menu_close'>
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
          <div key={item.title} className={styles.menu_list_item}>
            <a href={item.link}>{item.title}</a>
          </div>
        )
      })}
    </div>
  )
}
