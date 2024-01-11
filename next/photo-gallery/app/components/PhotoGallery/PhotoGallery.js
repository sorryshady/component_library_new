'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import styles from './PhotoGallery.module.css'
import ImageModal from '../ImageModal/ImageModal'
import { imagesData } from './Images'
const PhotoGallery = () => {
  const [toggle, setToggle] = useState(false)
  const [bgColor, setBgColor] = useState('')
  const [imageInfo, setImageInfo] = useState({
    imageName: '',
    src: '',
    color: '',
  })
  const handleClick = (imageName, src, color) => {
    setImageInfo({
      imageName,
      src,
      color,
    })
  }
  const handleHover = (color) => {
    if (window.innerWidth > 768) {
      setBgColor(color)
    }
  }
  const tl = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    const modal = modalRef.current
    const pItems = gsap.utils.toArray('.item p')

    gsap.set(pItems, {
      top: '150%',
    })

    tl.current = gsap.timeline({
      paused: true,
    })

    tl.current
      .to(
        modal,
        {
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%',
          ease: 'power4.inOut',
          pointerEvents: 'auto',
        },
        0
      )
      .to('.image', 0.75, {
        clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%',
        ease: 'power4.inOut',
      })
      .to(
        pItems,
        {
          top: '50%',
          ease: 'power4.inOut',
        },
        0.5
      )
  }, [])

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    toggle ? tl.current.play() : tl.current.reverse()
  }, [toggle])

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: bgColor, filter: 'brightness(80%)' }}
      >
        <div className={styles.gallery}>
          {imagesData.map((image) => (
            <ImageCard
              key={image.id}
              {...image}
              handleToggle={setToggle}
              handleClick={handleClick}
              handleHover={handleHover}
            />
          ))}
        </div>
      </div>
      <ImageModal
        imageInfo={imageInfo}
        handleToggle={setToggle}
        modalRef={modalRef}
      />
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
  handleHover,
}) => {
  const clickHandler = () => {
    handleClick(imageName, path, dominantColor)
    handleToggle(true)
  }
  return (
    <div
      className={styles.gallery_item}
      onClick={clickHandler}
      onMouseEnter={() => handleHover(dominantColor)}
    >
      <div className={styles.gallery_item_img}>
        <Image
          src={path}
          alt=''
          width={100}
          height={100}
          unoptimized={true}
          priority
        />
      </div>
      <div className={styles.gallery_item_name}>
        <p>{imageName}</p>
        <p>{id}</p>
        <p>{dominantColor}</p>
      </div>
    </div>
  )
}
