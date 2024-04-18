let backToTop = document.getElementById("backtotop");
backToTop.classList.add('opacity-0', 'invisible')

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.classList.remove('opacity-0', 'invisible')
    backToTop.classList.add('opacity-55', 'md:opacity-85')
  } else {
    backToTop.classList.add('opacity-0', 'invisible')
    backToTop.classList.remove('opacity-55', 'md:opacity-85')
  }
}

backToTop.onclick = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}