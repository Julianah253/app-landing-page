// change navbar styles on scroll 

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('window-scroll', window.scrollY > 0)
})