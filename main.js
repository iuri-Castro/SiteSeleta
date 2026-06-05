document.addEventListener('DOMContentLoaded', () => {
  // Elementos principais
  const menuToggle = document.getElementById('menuToggle'); // botão hamburger
  const navMenu = document.getElementById('navMenu'); // lista do menu
  const ctaButton = document.getElementById('ctaButton'); // botão principal na página
  const contatoSection = document.getElementById('contato'); // seção de contato

  // Toggle do menu (abre/fecha) e atualização de atributos ARIA
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active'); // adiciona/remove classe que mostra o menu
      menuToggle.classList.toggle('active'); // anima o ícone
      // atualiza atributo de acessibilidade
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Para cada link do menu, fazemos scroll suave até o título (<h1>-<h6>) dentro da seção
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      // Impede comportamento padrão para controlar o scroll manualmente
      e.preventDefault();
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // procura o primeiro título <h1>.. <h6> dentro da seção
        const heading = targetSection.querySelector('h1, h2, h3, h4, h5, h6');
        const scrollTarget = heading || targetSection;
        // scroll suave até o título ou à seção, centralizando
        scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Fecha o menu mobile após o clique
      navMenu?.classList.remove('active');
      menuToggle?.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // CTA que abre o WhatsApp em nova aba
  if (ctaButton) {
    const whatsappUrl = 'https://wa.me/5565984038405?text=Olá%20Seleta%20Cuiabá%2C%20gostaria%20de%20mais%20informações.';
    ctaButton.addEventListener('click', () => {
      window.open(whatsappUrl, '_blank');
    });
  }

  // Fecha o menu quando redimensionamos p/ desktop (previne menu aberto em tela larga)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const imagens = [
  "src/images/foto1.png",
  "src/images/foto2.png",
  "src/images/foto3.png",
  "src/images/foto4.png",
  "src/images/foto5.png",
];
  
let indice = 0;

function proxima() {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    document.getElementById("imagem").src = imagens[indice];
}

function anterior() {
    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    document.getElementById("imagem").src = imagens[indice];
}
