const section = document.querySelector('.section'),
  sectionContainer = section.querySelector('.section_container'),
  sectionCol = section.querySelectorAll('.section_col'),
  sectionCaption = section.querySelectorAll('.section_col_caption')

const isDesktop = window.matchMedia('(min-width: 768px)')
const init = () => {
  if (isDesktop.matches) addEventListeners()
}

const addEventListeners = () => {
  console.log('calling listeners')
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
