var Pjson = [
  { name: 'AI&GPTs Project', description: 'A project exploring AI and GPT technologies', tags: ['AI&GPTs'], img: './imgv.png' },
  { name: 'Backend Development', description: 'Building robust backend infrastructure', tags: ['Backend'], img: './imgv.png' },
  { name: 'Blockchain Project', description: 'Exploring blockchain technology', tags: ['Blockchain'], img: './imgv.png' },
  { name: 'Bubble.io Plugin', description: 'Developing a plugin for Bubble.io', tags: ['Bubble.io'], img: './imgv.png' },
  { name: 'Frontend Project', description: 'Creating engaging frontend experiences', tags: ['Frontend'], img: './imgv.png' },
  { name: 'Fullstack Development', description: 'Comprehensive fullstack application development', tags: ['Fullstack'], img: './imgv.png' },
  { name: 'IoT Device Implementation', description: 'Implementing IoT devices for automation', tags: ['IOT'], img: './imgv.png' },
  { name: 'Integrations Project', description: 'Integrating various APIs for enhanced functionality', tags: ['Integrations'], img: './imgv.png' },
  { name: 'Robotics Automation', description: 'Developing a robotics project for automation', tags: ['robotics'], img: './imgv.png' },
  { name: 'UI/UX Hackathon', description: 'A UI/UX project created for a hackathon', tags: ['UI/UX'], img: './imgv.png' },
  { name: 'WebApp Development', description: 'Creating feature-rich web applications', tags: ['WebApp'], img: './imgv.png' },
  // Add more project objects as needed
];




//load in projects 
document.addEventListener('DOMContentLoaded', function() {
    // Your projects data in JSON format
 
     const projects = Pjson
      // The rest of the JavaScript code remains the same
      
  
    // Display all projects initially
    displayProjects(projects);
  });
  
  function displayProjects(projects) {
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = '';
  
    projects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project');
  
      projectItem.innerHTML = `
        <img class="imgx" src ="${project.img}">
        <div class="name">${project.name}</div>
        <div class="description">${project.description}</div>
        <div class="tag">${project.tags.join(',')}</div>
      `;
  
      projectList.appendChild(projectItem);
    });
  }

  function filterProjects(tag) {
    const allProjects = Pjson;
  
    const filteredProjects = tag === 'All'
      ? allProjects
      : allProjects.filter(project => project.tags.includes(tag));
  
    displayProjects(filteredProjects);



       // Change the color of the clicked button to red and others to blue
  const tagButtons = document.querySelectorAll('.tag-filter');
  tagButtons.forEach(button => {
    if (button.textContent.toLowerCase() === tag.toLowerCase()) {
      button.style.backgroundColor = '#000000'; // Change to blue
      button.style.color = '#ffffff'; // Change to white
    } else {
      button.style.backgroundColor = '#e7e7e76f'; // Change to grey
      button.style.color = '#000000'; // Change to black
    }
  }); 

  }
  

