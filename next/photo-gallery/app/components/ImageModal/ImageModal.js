import React from 'react'
import Image from 'next/image'
import styles from './ImageModal.module.css'

const ImageModal = ({ imageInfo, handleToggle, modalRef }) => {
  return (
    <div
      className={styles.img_modal}
      ref={modalRef}
      style={{
        background: `linear-gradient(180deg, #0f0f0f , ${
          imageInfo.color || '#0f0f0f'
        } )`,
        filter: 'brightness(80%)',
      }}
    >
      <div className={`${styles.modal_item} ${styles.img_name} item`}>
        <p>{imageInfo.imageName}</p>
      </div>
      <div className={`image ${styles.img}`}>
        <Image
          src={imageInfo.src || '/images/image1.webp'}
          alt={imageInfo.imageName}
          width={500}
          height={500}
          quality={100}
          unoptimized={false}
          priority
        />
      </div>
      <div
        className={`${styles.modal_item} ${styles.close_btn} item`}
        onClick={() => handleToggle(false)}
      >
        <p>Close</p>
      </div>
    </div>
  )
}

export default ImageModal
