var Pjson = [
  { name: 'Hackweb', description: 'A project for a hackathon', tags: ['web3', 'chatgpt'] },
  { name: 'Sock store', description: 'E-commerce website development', tags: ['ecommerce', 'web3'] },
  { name: 'Epornet', description: 'API integration for a client', tags: ['api', 'integration'] },
  { name: 'QiMap', description: 'Qiskit quantum computing project', tags: ['quantum', 'qiskit'] },
  { name: 'Bubble plugin', description: 'Bubble.io plugin development', tags: ['bubble.io', 'plugin'] },
  { name: 'DormChat', description: 'No-code platform customization', tags: ['no-code', 'customization'] },
  { name: 'Acustic eye', description: 'IoT device implementation', tags: ['iot', 'embedded'] },
  { name: 'Powertile', description: 'Embedded systems development', tags: ['embedded', 'hardware'] },
  { name: 'Unibot', description: 'Robotics project for automation', tags: ['robotics', 'automation'] },
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
      button.style.backgroundColor = '#2bac58'; // Change to blue
      button.style.color = '#ffffff'; // Change to white
    } else {
      button.style.backgroundColor = '#e7e7e76f'; // Change to grey
      button.style.color = '#000000'; // Change to black
    }
  }); 

  }
  

