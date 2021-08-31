const btnOpen = document.querySelector('.fa-bars')
const btnClose = document.querySelector('.fa-times')
const mobive_nav = document.querySelector('.header__nav')

btnOpen.addEventListener('click', () => {
    mobive_nav.classList.add('mobile-nav')
    btnOpen.style.display = 'none'
})

btnClose.addEventListener('click', () => {
    mobive_nav.classList.remove('mobile-nav')
    btnOpen.style.display = 'block'
})