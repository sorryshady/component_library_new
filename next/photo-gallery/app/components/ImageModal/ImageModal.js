import React from 'react'
import Image from 'next/image'
import styles from './ImageModal.module.css'

const ImageModal = ({ imageInfo, handleToggle }) => {
  return (
    <div className={styles.img_modal}>
      <div className={`${styles.modal_item} ${styles.img_name}`}>
        <p>{imageInfo.imageName}</p>
      </div>
      <div className={styles.img}>
        <Image
          src={imageInfo.src}
          width='300'
          height='300'
          alt=''
          unoptimized={true}
        />
      </div>
      <div
        className={`${styles.modal_item} ${styles.close_btn}`}
        onClick={() => handleToggle(false)}
      >
        <p>Close</p>
      </div>
    </div>
  )
}

export default ImageModal
