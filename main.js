

//load in projects 
document.addEventListener('DOMContentLoaded', function() {
    // Your projects data in JSON format
    const projects = [
        { name: 'Project 1', description: 'A project for a hackathon', tags: ['web3', 'chatgpt'] },
        { name: 'Project 2', description: 'E-commerce website development', tags: ['ecommerce', 'web3'] },
        { name: 'Project 3', description: 'API integration for a client', tags: ['api', 'integration'] },
        { name: 'Project 4', description: 'Qiskit quantum computing project', tags: ['quantum', 'qiskit'] },
        { name: 'Project 5', description: 'Bubble.io plugin development', tags: ['bubble.io', 'plugin'] },
        { name: 'Project 6', description: 'No-code platform customization', tags: ['no-code', 'customization'] },
        { name: 'Project 7', description: 'IoT device implementation', tags: ['iot', 'embedded'] },
        { name: 'Project 8', description: 'Embedded systems development', tags: ['embedded', 'hardware'] },
        { name: 'Project 9', description: 'Robotics project for automation', tags: ['robotics', 'automation'] },
        // Add more project objects as needed
      ];
      
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
    const allProjects = [
      { name: 'Project 1', description: 'A project for a hackathon', tags: ['web3', 'chatgpt'] },
      { name: 'Project 2', description: 'E-commerce website development', tags: ['ecommerce', 'web3'] },
      { name: 'Project 3', description: 'API integration for a client', tags: ['api', 'integration'] },
      { name: 'Project 4', description: 'Qiskit quantum computing project', tags: ['quantum', 'qiskit'] },
      { name: 'Project 5', description: 'Bubble.io plugin development', tags: ['bubble.io', 'plugin'] },
      { name: 'Project 6', description: 'No-code platform customization', tags: ['no-code', 'customization'] },
      { name: 'Project 7', description: 'IoT device implementation', tags: ['iot', 'embedded'] },
      { name: 'Project 8', description: 'Embedded systems development', tags: ['embedded', 'hardware'] },
      { name: 'Project 9', description: 'Robotics project for automation', tags: ['robotics', 'automation'] },
      // Add more project objects as needed
    ];
  
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
      button.style.backgroundColor = '#dcdcdc'; // Change to grey
      button.style.color = '#000000'; // Change to black
    }
  }); 

  }
  

