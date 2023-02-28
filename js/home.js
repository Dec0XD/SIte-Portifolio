// Seleciona o botão de abertura do modal
const abrirModal = document.querySelector('.abrir-modal');
// Seleciona o modal
const modal = document.querySelector('.modal-codigo');
// Seleciona o botão de fechamento do modal
const fecharModal = document.querySelector('.fechar-modal');

// Adiciona um ouvinte de evento de clique no botão de abertura do modal
abrirModal.addEventListener('click', () => {
  // Abre o modal adicionando a classe "aberto"
  modal.classList.add('aberto');
});

// Adiciona um ouvinte de evento de clique no botão de fechamento do modal
fecharModal.addEventListener('click', () => {
  // Fecha o modal removendo a classe "aberto"
  modal.classList.remove('aberto');
});



// define a função para mudar o idioma
function changeLanguage(lang) {
  // selecione todos os elementos com o atributo "data-translate"
  var elements = document.querySelectorAll("[data-translate]");
  // itere sobre cada elemento e mude o texto de acordo com o idioma selecionado
  for (var i = 0; i < elements.length; i++) {
    var key = elements[i].getAttribute("data-translate");
    elements[i].innerHTML = translations[lang][key];
  }
}

// defina as traduções
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
    "about-me": "Como estudante de Ciência de Dados e Inteligência Artificial e desenvolvedor Full Stack freelancer, tenho habilidades em diversas tecnologias, incluindo HTML5, CSS3, JavaScript e Python, bem como conhecimentos em C# e Django. Possuo experiência em PySimpleGUI, pandas, numpy e matplot para análise de dados e estou atualmente estudando automação de processos em Python usando as ferramentas Selenium e PyAutoGUI. Meus trabalhos e projetos estão disponíveis em meu perfil no GitHub, onde busco constantemente contribuir com a comunidade de desenvolvedores e aplicar minhas habilidades em novos desafios e projetos interessantes.",
    "my-projects": "Meus projetos feitos e/ou em andamento",
    "project-title-1": "Portal do Cálculo - Projeto Freelancer",
    "project-description-1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo quis mi sagittis, a luctus ante dapibus. Nullam maximus velit vel quam aliquam, id ultricies purus vulputate. Aliquam at elit id nibh lobortis congue eget ac metus. Sed lobortis ex euismod enim faucibus, eget accumsan justo vestibulum. Sed semper leo in turpis blandit lacinia. Vivamus euismod ex sit amet quam tincidunt, at feugiat nulla eleifend. Sed blandit vel nulla a auctor. Donec euismod ultricies magna, a pretium metus bibendum at. Cras porta ipsum in ex congue, vitae pretium elit fringilla. Sed eu leo libero.",
    "project-links-1": "Links Do Projeto",
    "project-code-link-1": "Código",
    "project-site-link-1": "Site",
    "project-close-link-1": "Fechar"
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
    "about-me": "As a Data Science and Artificial Intelligence student and freelance Full-Stack developer, I have skills in various technologies including HTML5, CSS3, JavaScript, and Python, as well as knowledge in C# and Django. I have experience in PySimpleGUI, pandas, numpy, and matplot for data analysis and am currently studying process automation in Python using the Selenium and PyAutoGUI tools. My work and projects are available on my GitHub profile, where I constantly seek to contribute to the developer community and apply my skills to new interesting challenges and projects.",
    "my-projects": "My Completed and/or Ongoing Projects",
    "project-title-1": "Calculation Portal - Freelance Project",
    "project-description-1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo quis mi sagittis, a luctus ante dapibus. Nullam maximus velit vel quam aliquam, id ultricies purus vulputate. Aliquam at elit id nibh lobortis congue eget ac metus. Sed lobortis ex euismod enim faucibus, eget accumsan justo vestibulum. Sed semper leo in turpis blandit lacinia. Vivamus euismod ex sit amet quam tincidunt, at feugiat nulla eleifend. Sed blandit vel nulla a auctor. Donec euismod ultricies magna, a pretium metus bibendum at. Cras porta ipsum in ex congue, vitae pretium elit fringilla. Sed eu leo libero.",
    "project-links-1": "Project Links",
    "project-code-link-1": "Code",
    "project-site-link-1": "Site",
    "project-close-link-1": "Close"
  }
}