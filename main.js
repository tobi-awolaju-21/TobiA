var Pjson = [
  { name: 'Backend Development', description: 'Building robust backend infrastructure', tags: ['Backend'], img: './imgv.png', url: 'https://bubble.io/page?id=backend-development' },
  { name: 'Bubble.io Plugin - Midjourney', description: 'Developing a Bubble.io plugin for Midjourney', tags: ['Bubble.io', 'Plugin'], img: './imgv.png', url: 'https://midjourney-demo-backup.bubbleapps.io/version-test' },
  { name: 'Bubble.io Plugin - Custom Translator', description: 'Developing a Bubble.io plugin for custom translation', tags: ['Bubble.io', 'Plugin'], img: './imgv.png', url: 'https://translator-demo3.bubbleapps.io/version-test' },
  { name: 'Bubble.io Plugin - Agora Call and Firebase Chat', description: 'Developing a plugin for Agora Call and Firebase Chat on Bubble.io', tags: ['Bubble.io', 'Plugin'], img: './imgv.png', url: 'https://bubble.io/page?id=agora-call-chat&test_plugin=1700517540070x153454572276285440_current' },
  { name: 'Bubble.io Plugin - File Type Detector', description: 'Developing a Bubble.io plugin for file type detection', tags: ['Bubble.io', 'Plugin'], img: './imgv.png', url: 'https://new-extension-demo-92793.bubbleapps.io/version-test' },
  { name: 'Bubble.io Plugin - Speech to Text', description: 'Developing a Bubble.io plugin for speech to text', tags: ['Bubble.io', 'Plugin'], img: './imgv.png', url: 'https://sttproject-demo.bubbleapps.io/version-test' },
  { name: 'Bubble.io Plugin - AWX Lex', description: 'Developing a Bubble.io plugin for AWX Lex', tags: ['Bubble.io', 'Plugin'], img: './imgv.png', url: 'https://duplicate-demo.bubbleapps.io/version-test' },
  { name: 'Bubble.io Plugin - AWX Lex Documentation', description: 'Documentation for the AWX Lex Bubble.io plugin', tags: ['Bubble.io', 'Plugin', 'Documentation'], img: './imgv.png', url: 'https://aws-lex-bubble-plugin-doc.webflow.io' },
  { name: 'Bubble.io Plugin - Document Scanner', description: 'Developing a Bubble.io plugin for document scanning', tags: ['Bubble.io', 'Plugin'], img: './imgv.png', url: 'https://300-project.bubbleapps.io/version-test' },
  { name: 'Bubble.io Plugin - Custom Audio Player', description: 'Developing a Bubble.io plugin for custom audio player', tags: ['Bubble.io', 'Plugin'], img: './imgv.png', url: 'https://bubble.io/page?id=green-audio-prototype&test_plugin=1696492453328x593012153954336800_current' },
  { name: 'AI and Computer Vision', description: 'A project involving AI and Computer Vision', tags: ['AI&GPTs', 'WebApp'], img: './imgv.png', url: 'https://tobi-awolaju-21.github.io/CS3483-assigment/' },
  { name: 'Wingman - AI Crash Course Tool', description: 'An AI tool that converts assignments and past questions to crash courses', tags: ['AI&GPTs', 'WebApp'], img: './imgv.png', url: 'https://tobi-awolaju-21.github.io/Wingman/' },
  { name: 'Leet - Distributed Version Control Note Taking System', description: 'A distributed version control note-taking system', tags: ['Distributed Version Control', 'Note Taking'], img: './imgv.png', url: 'https://github.com/tobi-awolaju-21/leetNote' },
  { name: 'People - Social Networking App for College Students', description: 'A social networking app for college students', tags: ['WebApp', 'Blockchain'], img: './imgv.png', url: 'https://github.com/tobi-awolaju-21/People/' },
  { name: 'Insulin Pump Design', description: 'Our team\'s insulin pump project - First Design', tags: ['IOT', 'robotics'], img: './imgv.png', url: 'https://www.tinkercad.com/things/6JDbZr8ZSiW-our-teams-insulin-pump-projectfirst-design' }
  // Add more project objects as needed
];




//naivigate to details
function navigateToDetails(url) {
  // Navigate to the details.html page
  window.location.href = url;
}







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
      <div class="url" style="display: none;">${project.url}</div>
    `;
    
    // Make the entire projectItem clickable
    projectItem.style.cursor = 'pointer';
    projectItem.onclick = function () {
      navigateToDetails(project.url);
    };
    
  
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
  

