import React from 'react'
import Image from 'next/image'
import styles from './ImageModal.module.css'

const ImageModal = ({ imageInfo, handleToggle, modalRef }) => {
  return (
    <div
      className={styles.img_modal}
      ref={modalRef}
      style={{ backgroundColor: imageInfo.color }}
    >
      <div className={`${styles.modal_item} ${styles.img_name} item`}>
        <p>{imageInfo.imageName}</p>
      </div>
      <div className={`image ${styles.img}`}>
        <Image
          src={imageInfo.src || '/photographyPage/image1.jpg'}
          width='300'
          height='300'
          alt=''
          unoptimized={true}
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
