import React from 'react'
import styles from './Landing.module.scss'
import Image from 'next/image'
import { sectionData } from './section_data'
import Menu from '../Menu/Menu'
const Landing = () => {
  return (
    <>
      <Menu />
      <div className={styles.main}>
        <div className={styles.section}>
          <div className={styles.section_header}>
            <div>
              <div>ArchitExpanse</div>
              <div className='--desktop'></div>
              <div className='--desktop'></div>
              <div className={styles.menu_open}>
                <p>&#x2014;</p>
                <p>&#x2014;</p>
              </div>
            </div>
          </div>
          <div className={styles.section_container}>
            {sectionData.map((data) => {
              return <Section key={data.number} {...data} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing

const Section = ({ title, number, image, caption }) => {
  return (
    <div className={styles.col}>
      <div className={styles.col_media}>
        <Image src={image} alt='' width={100} height={100} unoptimized={true} />
      </div>
      <div className={`${styles.col_caption} --desktop`}>
        <span>{caption}</span>
      </div>
      <div className={styles.col_title}>
        <h2>{title}</h2>
        <p className='--mobile'>Discover more &rarr;</p>
      </div>
      <div className={styles.col_number}>
        <h1>{number}</h1>
      </div>
    </div>
  )
}
