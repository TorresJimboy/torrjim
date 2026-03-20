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

// NAV
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

// Certificates modal
const openBtn = document.getElementById("openCertificates");
const modal = document.getElementById("certModal");

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

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Footer
const dateSnapshot = new Date()
const footerDate = document.getElementById('foot-date')
footerDate.textContent = (`© ${dateSnapshot.getFullYear()} Guariño Torres. All rights reserved.`)
