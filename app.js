console.log('app running')
const navbar = document.querySelector('.navbar')

const checkScrollValue = () => {
  if (window.scrollY > 80) {
    navbar.classList.add('navbar-active')
  } else {
    navbar.classList.remove('navbar-active')
  }
}


window.addEventListener('scroll', checkScrollValue)