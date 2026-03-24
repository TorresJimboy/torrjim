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
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');

let index = 0;


certBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.classList.add('show');
});


overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
});


container.addEventListener('click', (e) => {
  e.stopPropagation();
});


slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  
  dot.addEventListener('click', (e) => {
    e.stopPropagation();
    index = i;
    updateSlide();
    updateDots();
  });
  
  dotsContainer.appendChild(dot);
});


function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}


function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}


function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}


nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  nextSlide();
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  prevSlide();
});


// Projects
import projects from './data.js'
const projectBox = document.getElementById("project-box")
projectBox.innerHTML = projects.map(project => `
  <div class="project-card">
    <a href="${project.link}" target="_blank" el="noopener noreferrer" class="heft">
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
