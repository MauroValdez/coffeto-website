import "@fontsource/pacifico";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

const header = document.querySelector('#header')
console.log(header)

const scrollHeader = () => {
  window.scrollY >= 50 ? header.classList.add('scroll-header')
                      : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)