
// Enable hidden nav bar
{
    const nav = document.querySelector("header");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        console.log('down')
        nav.classList.add("nav--hidden");
      } else {
        console.log('up')
        nav.classList.remove("nav--hidden");
      }
  
      lastScrollY = window.scrollY;
    });
  }
// {
//     const nav = document.querySelector(".navBar");
//     let lastScrollY = window.scrollY;
  
//     window.addEventListener("scroll", () => {
//       if (lastScrollY < window.scrollY) {
//         console.log('down')
//         nav.classList.add("nav--hidden");
//       } else {
//         console.log('up')
//         nav.classList.remove("nav--hidden");
//       }
  
//       lastScrollY = window.scrollY;
//     });
//   }
  