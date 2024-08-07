// abertura do modal
const abrirModal = document.querySelector('.abrir-modal');
// Seleciona o modal
const modal = document.querySelector('.modal-codigo');
// botão de fechamento do modal
const fecharModal = document.querySelector('.fechar-modal');

// abertura do modal
abrirModal.addEventListener('click', () => {
  modal.classList.add('aberto');
});

// fechamento do modal
fecharModal.addEventListener('click', () => {
  modal.classList.remove('aberto');
});



//função para mudar o idioma
function changeLanguage(lang) {
  var elements = document.querySelectorAll("[data-translate]");
  for (var i = 0; i < elements.length; i++) {
    var key = elements[i].getAttribute("data-translate");
    elements[i].innerHTML = translations[lang][key];
  }
}

//traduções
var translations = {
  "pt": {
    "sobre-mim": "Sobre mim",
    "projetos": "Projetos",
    "contato": "Contato",
    "english": "Inglês",
    "espanol": "Espanhol",
    "portugues": "Português",
    "hello": "Olá! eu sou o André Coêlho :)",
    "full-stack": "Desenvolvedor Full-Stack",
    "download-cv": "Baixar CV",
    "contact-me": "Entrar em contato",
    "about-me": "Como estudante de Ciência de Dados e Inteligência Artificial / desenvolvedor Full Stack freelancer, tenho habilidades em diversas tecnologias, incluindo HTML5, CSS3, JavaScript e Python, bem como conhecimentos em C# e Django. Possuo experiência em PySimpleGUI, pandas, numpy e matplot para análise de dados e estou atualmente estudando automação de processos em Python usando as ferramentas Selenium e PyAutoGUI. Meus trabalhos e projetos estão disponíveis em meu perfil no GitHub, onde busco constantemente contribuir com a comunidade de desenvolvedores e aplicar minhas habilidades em novos desafios e projetos interessantes.",
    "my-projects": "Meus projetos feitos e/ou em andamento",
    "project-title-1": "Portal de Cálculo - Projeto Freelancer",
    "project-description-1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo quis mi sagittis, a luctus ante dapibus. Nullam maximus velit vel quam aliquam, id ultricies purus vulputate. Aliquam at elit id nibh lobortis congue eget ac metus. Sed lobortis ex euismod enim faucibus, eget accumsan justo vestibulum. Sed semper leo in turpis blandit lacinia. Vivamus euismod ex sit amet quam tincidunt, at feugiat nulla eleifend. Sed blandit vel nulla a auctor. Donec euismod ultricies magna, a pretium metus bibendum at. Cras porta ipsum in ex congue, vitae pretium elit fringilla. Sed eu leo libero.",
    "project-links-1": "Links Do Projeto",
    "project-code-link-1": "Código",
    "project-site-link-1": "Site",
    "project-close-link-1": "Fechar",
    "contate": "Contate-me",
    "nome": "Seu nome *",
    "email": "Seu email *",
    "mensagem": "Sua mensagem *",
    "enviar": "Enviar",
    "ou": "Ou",
  },
  "en": {
    "sobre-mim": "About Me",
    "projetos": "Projects",
    "contato": "Contact",
    "english": "English",
    "espanol": "Spanish",
    "portugues": "Portuguese",
    "hello": "Hello! I'm André Coêlho :)",
    "full-stack": "Full-Stack Developer",
    "download-cv": "Download CV",
    "contact-me": "Contact Me",
    "about-me": "As a Data Science and Artificial Intelligence student / freelance Full-Stack developer, I have skills in various technologies including HTML5, CSS3, JavaScript, and Python, as well as knowledge in C# and Django. I have experience in PySimpleGUI, pandas, numpy, and matplot for data analysis and am currently studying process automation in Python using the Selenium and PyAutoGUI tools. My work and projects are available on my GitHub profile, where I constantly seek to contribute to the developer community and apply my skills to new interesting challenges and projects.",
    "my-projects": "My Completed and/or Ongoing Projects",
    "project-title-1": "Calculation Portal - Freelance Project",
    "project-description-1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo quis mi sagittis, a luctus ante dapibus. Nullam maximus velit vel quam aliquam, id ultricies purus vulputate. Aliquam at elit id nibh lobortis congue eget ac metus. Sed lobortis ex euismod enim faucibus, eget accumsan justo vestibulum. Sed semper leo in turpis blandit lacinia. Vivamus euismod ex sit amet quam tincidunt, at feugiat nulla eleifend. Sed blandit vel nulla a auctor. Donec euismod ultricies magna, a pretium metus bibendum at. Cras porta ipsum in ex congue, vitae pretium elit fringilla. Sed eu leo libero.",
    "project-links-1": "Project Links",
    "project-code-link-1": "Code",
    "project-site-link-1": "Site",
    "project-close-link-1": "Close",
    "contate": "Contact me",
    "nome": "Your name *",
    "email": "Your email *",
    "mensagem": "Your message *",
    "enviar": "Send",
    "ou": "Or",
  },
  "es": {
    "sobre-mim": "Sobre mí",
    "projetos": "Proyectos",
    "contato": "Contacto",
    "english": "Inglés",
    "espanol": "Español",
    "portugues": "Portugués",
    "hello": "¡Hola! Soy André Coêlho :)",
    "full-stack": "Desarrollador Full-Stack",
    "download-cv": "Descargar CV",
    "contact-me": "Contáctame",
    "about-me": "Como estudiante de Ciencia de Datos e Inteligencia Artificial / desarrollador Full Stack freelancer, tengo habilidades en diversas tecnologías, incluyendo HTML5, CSS3, JavaScript y Python, así como conocimientos en C# y Django. Poseo experiencia en PySimpleGUI, pandas, numpy y matplot para análisis de datos y actualmente estoy estudiando automatización de procesos en Python usando las herramientas Selenium y PyAutoGUI. Mis trabajos y proyectos están disponibles en mi perfil de GitHub, donde busco constantemente contribuir con la comunidad de desarrolladores y aplicar mis habilidades en nuevos desafíos y proyectos interesantes.",
    "my-projects": "Mis proyectos realizados y/o en curso",
    "project-title-1": "Portal del Cálculo - Proyecto Freelancer",
    "project-description-1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo quis mi sagittis, a luctus ante dapibus. Nullam maximus velit vel quam aliquam, id ultricies purus vulputate. Aliquam at elit id nibh lobortis congue eget ac metus. Sed lobortis ex euismod enim faucibus, eget accumsan justo vestibulum. Sed semper leo in turpis blandit lacinia. Vivamus euismod ex sit amet quam tincidunt, at feugiat nulla eleifend. Sed blandit vel nulla a auctor. Donec euismod ultricies magna, a pretium metus bibendum at. Cras porta ipsum in ex congue, vitae pretium elit fringilla. Sed eu leo libero.",
    "project-links-1": "Enlaces Del Proyecto",
    "project-code-link-1": "Código",
    "project-site-link-1": "Sitio",
    "project-close-link-1": "Cerrar",
    "contate": "Contáctame",
    "nome": "Tu nombre *",
    "email": "Tu correo electrónico *",
    "mensagem": "Tu mensaje *",
    "enviar": "Enviar",
    "ou": "O",
  }
}