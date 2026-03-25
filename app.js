const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

// Nav
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list ul li a");

function setActiveLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

// Certificates
const overlay = document.getElementById('overlay');
const container = document.querySelector('.carousel-container');
const certBtn = document.getElementById('certBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const track = document.getElementById('track');
const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.getElementById('dots');

let index = 0;
let startX = 0;
let isSwiping = false;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);
const allSlides = Array.from(track.children);

track.style.transform = 'translateX(-100%)';

certBtn.addEventListener('click', e => { e.stopPropagation(); overlay.classList.add('show'); document.body.style.overflow = 'hidden'; });
overlay.addEventListener('click', () => { overlay.classList.remove('show'); document.body.style.overflow = ''; goToSlide(index); });
container.addEventListener('click', e => e.stopPropagation());

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', e => { e.stopPropagation(); goToSlide(i); });
  dotsContainer.appendChild(dot);
});

function updateDots() {
  document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function goToSlide(i, skipTransition = false) {
  index = i;
  track.style.transition = skipTransition ? 'none' : 'transform 0.3s ease';
  track.style.transform = `translateX(-${(index + 1) * 100}%)`;
  updateDots();
}

function moveSlide(direction) {
  if (direction === 1 && index >= slides.length - 1) {
    index++;
    goToSlide(index);
    track.addEventListener('transitionend', () => goToSlide(0, true), { once: true });
  } else if (direction === -1 && index <= 0) {
    index--;
    goToSlide(index);
    track.addEventListener('transitionend', () => goToSlide(slides.length - 1, true), { once: true });
  } else {
    goToSlide(index + direction);
  }
}

nextBtn.addEventListener('click', e => { e.stopPropagation(); moveSlide(1); });
prevBtn.addEventListener('click', e => { e.stopPropagation(); moveSlide(-1); });

function startSwipe(e) { isSwiping = true; startX = e.touches[0].clientX; }
function endSwipe(e) {
  if (!isSwiping) return;
  const delta = e.changedTouches[0].clientX - startX;
  if (delta > 50) moveSlide(-1);
  else if (delta < -50) moveSlide(1);
  isSwiping = false;
}

track.addEventListener('touchstart', startSwipe);
track.addEventListener('touchend', endSwipe);

// Projects
import projects from './data.js'
const projectBox = document.getElementById("project-box")
projectBox.innerHTML = projects.map(project => `
  <div class="project-card">
    <a href="${project.link}" target="_blank" el="noopener noreferrer" class="heft pulse">
      <img src="${project.image}" alt="${project.name}">
    </a>
    <div class="card-info">
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <p class="tech">${project.tech}</p>
    </div>
  </div>
`).join('');

// Footer
const dateSnapshot = new Date()
const footerDate = document.getElementById('foot-date')
footerDate.textContent = (`© ${dateSnapshot.getFullYear()} Guariño Torres. All rights reserved.`)

// Animation
document.querySelectorAll('.slide-up').forEach(el => {
  const observer = new IntersectionObserver(
    ([entry], obs) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(el);
});
