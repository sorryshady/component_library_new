function generateRandomName() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_'
  const nameLength = Math.floor(Math.random() * 3) + 6

  let randomName = ''
  for (let i = 0; i < nameLength; i++) {
    randomName += characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  }
  return randomName + '.jpeg'
}

function generateRandomImageName() {
  const imageNumber = Math.floor(Math.random() * 8) + 1
  return `image${imageNumber}.jpg`
}

document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.querySelector('.gallery')
  const imgModal = document.querySelector('.img_modal')
  const imgViewContainer = imgModal.querySelector('.img')
  const modalName = imgModal.querySelector('.img_name')

  const tl = gsap.timeline({ paused: true })
  let clickedItemImgSrc = ''
  let clickedItemName = ''

  for (let i = 1; i <= 80; i++) {
    const item = document.createElement('div')
    item.classList.add('item')

    const itemImg = document.createElement('div')
    itemImg.classList.add('item_img')

    const imgTag = document.createElement('img')
    const randomImageName = generateRandomImageName()
    imgTag.src = `./photographyPage/${randomImageName}`
    itemImg.appendChild(imgTag)

    const itemName = document.createElement('div')
    itemName.classList.add('item_name')
    const randomName = generateRandomName()
    itemName.innerHTML = `<p>${randomName}</p>`
    itemName.setAttribute('data-img', randomImageName.replace('.jpg', ''))

    item.appendChild(itemImg)
    item.appendChild(itemName)

    item.addEventListener('click', function () {
      const dataImg = itemName.getAttribute('data-img')
      if (imgViewContainer && modalName) {
        clickedItemImgSrc = `./photographyPage/${dataImg}.jpg`
        clickedItemName = itemName.textContent
        console.log(clickedItemName)
        imgViewContainer.innerHTML = `<img src="${clickedItemImgSrc}" alt="" />`
        modalName.textContent = clickedItemName
        tl.reversed(!tl.reversed())
      }
    })

    galleryContainer.appendChild(item)
  }

  const closeBtn = document.querySelector('.close_btn')
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      tl.reversed(!tl.reversed())
    })
  }

  function revealModal() {
    tl.to('.img_modal', 0.75, {
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%',
      ease: 'power4.inOut',
      pointerEvents: 'auto',
    })

    tl.to('.img_modal .img', 0.75, {
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'power4.inOut',
    })

    tl.to(
      '.modal_item p',
      1,
      {
        top: 0,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.2,
        },
      },
      '<'
    ).reverse()
  }
  revealModal()
})
