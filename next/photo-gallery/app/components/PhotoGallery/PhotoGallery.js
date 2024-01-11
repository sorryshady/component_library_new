'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import styles from './PhotoGallery.module.css'
import ImageModal from '../ImageModal/ImageModal'
import { imagesData } from './Images'
const PhotoGallery = () => {
  const [toggle, setToggle] = useState(false)
  const [imageInfo, setImageInfo] = useState({
    imageName: '',
    src: '',
  })
  const handleClick = (imageName, src) => {
    setImageInfo({
      imageName,
      src,
    })
  }
  const tl = useRef(null)

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    })
  }, [])

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse()
  }, [toggle])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.gallery}>
          {imagesData.map((image) => (
            <ImageCard
              key={image.id}
              {...image}
              handleToggle={setToggle}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
      {toggle && <ImageModal imageInfo={imageInfo} handleToggle={setToggle} />}
    </>
  )
}

export default PhotoGallery

const ImageCard = ({
  path,
  dominantColor,
  id,
  imageName,
  handleToggle,
  handleClick,
}) => {
  const clickHandler = () => {
    handleClick(imageName, path)
    handleToggle(true)
  }
  return (
    <div className={styles.gallery_item} onClick={clickHandler}>
      <div className={styles.gallery_item_img}>
        <Image src={path} alt='' width={100} height={100} unoptimized={true} />
      </div>
      <div className={styles.gallery_item_name}>
        <p>{imageName}</p>
        <p>{id}</p>
        <p>{dominantColor}</p>
      </div>
    </div>
  )
}
