const section = document.querySelector('.section'),
  sectionContainer = section.querySelector('.section_container'),
  sectionCol = section.querySelectorAll('.section_col'),
  sectionCaption = section.querySelectorAll('.section_col_caption')

const isDesktop = window.matchMedia('(min-width: 769px)')
const init = () => {
  if (isDesktop.matches) addEventListeners()
}

const addEventListeners = () => {
  // set active class to the first col
  sectionCol[0].classList.add('active')

  sectionCol.forEach((col, index) => {
    col.addEventListener('mouseenter', () => {
      sectionCol.forEach((col) => col.classList.remove('active'))

      col.classList.add('active')

      if (index === col.length - 1) col.classList.add('active')
    })
  })
}
init()

const menu = document.querySelector('.menu'),
  menuItems = menu.querySelectorAll('.menu_list'),
  menuItemsAnchor = menu.querySelectorAll('.menu_list_item')

const openButton = document.querySelector('.menu_open')
const closeButton = document.querySelector('.menu_close')

const tl = gsap.timeline({
  paused: true,
  defaults: { duration: 0.92, ease: 'expo.inOut' },
})

const initMenu = () => {
  gsap.set(menu, { pointerEvents: 'none', autoAlpha: 0 })
  gsap.set(menuItems, { autoAlpha: 0 })
  gsap.set(menuItemsAnchor, { x: '-100%' })

  tl.to(
    menu,
    {
      autoAlpha: 1,
      stagger: 0.02,
      pointerEvents: 'auto',
    },
    0
  )
    .to(
      menuItems,
      {
        autoAlpha: 1,
      },
      0.08
    )
    .to(
      menuItemsAnchor,
      {
        x: 0,
        stagger: 0.016,
      },
      0
    )

  tl.to(
    '.app',
    {
      x: '-50rem',
    },
    0
  )
    .to(
      '.section_header div',
      {
        autoAlpha: 0,
      },
      0
    )
    .to(
      'body',
      {
        backgroundColor: '#111111',
        overflow: 'hidden',
        pointerEvents: 'none',
      },
      0
    )
}

const open = () => {
  tl.play()
  menu.computedStyleMap.pointerEvents = 'auto'
}
const close = () => {
  tl.reverse()
  menu.computedStyleMap.pointerEvents = 'none'
}

openButton.addEventListener('click', open)
closeButton.addEventListener('click', close)

initMenu()