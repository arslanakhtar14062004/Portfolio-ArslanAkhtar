/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
      letters = homeText.textContent.trim().split(''), // convert the text into an array of characters
      angleStep = 360 / letters.length // Angle for each character , lenght count the number of characters in the text

 homeText.textContent = '' // Clear the original content  

 // Iterate through each character 
 letters.forEach((char, i) => {
   const span = document.createElement('span') // Create a span element for each character
   span.textContent = char // Set the character as the text content of the span
   span.style.transform = `rotate(${i * angleStep}deg)` // Rotate each letter based on its index to create a circular effect
   homeText.appendChild(span) // Append the span to the main text container

 })

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
  strings: [' Web Developer', 'Creative Mind', 'UI Developer'], // Add the professions you want to display here
  typeSpeed: 60, // Speed of typing
  backSpeed: 30, // Speed of deleting
  backDelay: 2000, // Delay before deleting
  loop: true // Loop the typing effect
});

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('scroll-header') 
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/ 
const swiperWork = new Swiper('.work__swiper', {
   loop: true,
   spaceBetween: 24,
   slidesPerView: 'auto',
   grabCursor: true,
   speed: 600,


   pagination: {
    el: '.swiper-pagination',
      clickable: true,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   }
})


/*=============== SERVICES ACCORDION ===============*/ 
const servicesCards = document.querySelectorAll('.services__card');
      servicesButtons  = document.querySelectorAll('.services__button');
       
      // Iterate through each button and add a click event listener
      servicesButtons.forEach(button=> {
        button.addEventListener('click', () => {
         const currentCard = button.closest('.services__card'); // Get the parent card of the clicked button
         isOpen = currentCard.classList.contains('services-open'); // Check if the current card is open

         // Close all cards
         servicesCards.forEach(card => {
             card.classList.replace('services-open', 'services-close');
         });

         // If the current card was not open, open it
         if (!isOpen) {
             currentCard.classList.replace('services-close', 'services-open');
         }
        });
      });



/*=============== CONTACT EMAIL JS ===============*/ 


const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


      const sendEmail = async (e) => {
         // Prevent the default form submission behavior
         e.preventDefault()
      

      try {
         // serviceID - templateID - #form - publicKey
         await emailjs.sendForm('service_x9whn0z','template_3gyaurv', '#contact-form', '-Z33TNfCOvaN3nAll')
          
         // show sent message 
         contactMessage.textContent = 'Message sent successfully ✅'

         // clear the input fields
         contactForm.reset()
      }   catch (error) {
         // show error message
         contactMessage.textContent = 'Failed to send message ❌'
      } finally{
         // Remove the message after 5 seconds
         setTimeout(() =>    contactMessage.textContent = '' , 5000)
      } 

   } 
   contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
   // We get the position by scrolling down
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0   // Mouse position

const cursorMove = () => {
   cursor.style.left = `${mouseX}px` // Set the left position of the cursor to the mouse's X coordinate
   cursor.style.top = `${mouseY}px` // Set the top position of the cursor to the mouse's Y coordinate
   cursor.style.transform = 'translate(-50%, -50%)' // Center the cursor on the mouse position

   //repeat the function with each mouse movement
   requestAnimationFrame(cursorMove)
}

// Detect mouse movement and update the mouseX and mouseY variables
document.addEventListener('mousemove', (e) => {
   mouseX = e.clientX // save the mouse's X coordinate
   mouseY = e.clientY // save the mouse's Y coordinate
})

cursorMove()

/* Hide custom cursor on links */ 
const a = document.querySelectorAll('a') // Select all links 

a.forEach(item => {
   item.addEventListener('mouseover', () => {
      cursor.classList.add('hide-cursor') // Add the hover class when mouse enters a link
   })
   // Remove the hover class when mouse leaves a link
   item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hide-cursor') // Remove the hover class when mouse leaves a link
   })
})

// scroll reveal animation
const sr = ScrollReveal({
   origin: 'bottom',
   distance: '60px',
   duration: 1200,
   delay: 300,
   easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
   reset: true, // Animation will repeat every time the element enters the viewport

 })

 sr.reveal(`.home__subtitle`)
 sr.reveal(`.home__title`, {delay: 600})
 sr.reveal(`.home__description`, {delay: 900})
 sr.reveal(`.home__box-1`, {delay: 1200, rotate:{z: -20}})
 sr.reveal(`.home__box-2`, {delay: 1300, rotate:{z: -30}})
 sr.reveal(`.home__box-3`, {delay: 1400, rotate:{z: -40}})
 sr.reveal(`.home__img`, {delay: 1700, distance: '-60px'})
 sr.reveal(`.home__circle`, {delay: 2000, distance: '-100px'})


sr.reveal('.about__title')
sr.reveal('.about__description', {delay: 600})
sr.reveal('.about__button', {delay: 900})

sr.reveal('.services__swiper')

sr.reveal('.services__card:nth-child(odd)', {interval: 200,origin: 'left', distance: '100px'})
sr.reveal('.services__card:nth-child(even)', {interval: 200,origin: 'right', distance: '100px'})

sr.reveal('.skills__description')
sr.reveal('.skills__card', {delay: 600, interval: 200})
sr.reveal('.skills__profession', {delay: 900})
sr.reveal('.skills__list', {delay: 1200, interval: 200})


sr.reveal('.contact__form')
sr.reveal('.contact__link', {delay: 600, interval: 200})

sr.reveal('.footer__container')