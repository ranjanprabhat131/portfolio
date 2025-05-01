// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Sticky Navigation Bar
  window.onscroll = function() {
    var navbar = document.querySelector('header');
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };
  
  // Scroll Animations
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  window.addEventListener('scroll', () => {
    elements.forEach(element => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight) {
        element.classList.add('fade-in');
      }
    });
  });
  
  // Modal for Projects (Click to see more details)
  const projectDetails = {
    "Dhulikhel Thematic Map": {
      title: "Dhulikhel Thematic Map",
      description: "A thematic mapping project focused on the Dhulikhel area using GIS software. Involved land use analysis, data classification, and map layout design.",
      technologies: "GIS Software, QGIS, ENVI",
    }
  };
  
  function showProjectDetails(projectName) {
    const project = projectDetails[projectName];
    if (project) {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `
        <div class="modal-content">
          <h2>${project.title}</h2>
          <p><strong>Description:</strong> ${project.description}</p>
          <p><strong>Technologies:</strong> ${project.technologies}</p>
          <button class="close-modal">Close</button>
        </div>
      `;
      document.body.appendChild(modal);
  
      document.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
      });
    }
  }
  
  document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
      showProjectDetails(project.querySelector('h3').innerText);
    });
  });
  