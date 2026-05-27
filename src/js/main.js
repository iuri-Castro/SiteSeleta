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

  // CTA que rola até contato
  if (ctaButton && contatoSection) {
    ctaButton.addEventListener('click', () => {
      // rola até a seção de contato, centralizando
      contatoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
