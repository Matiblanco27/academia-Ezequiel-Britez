// Header Scroll Effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// WhatsApp Buttons dynamically set message
const waButtons = document.querySelectorAll('.w-whatsapp');
const waBaseUrl = "https://wa.me/5493764378362?text=";

waButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const msg = btn.getAttribute('data-msg');
        window.open(waBaseUrl + encodeURIComponent(msg), '_blank');
    });
});

// Internationalization (i18n)
const translations = {
    'ES': {
        'nav-inicio': 'Inicio',
        'nav-nosotros': 'Nosotros',
        'nav-servicios': 'Servicios',
        'nav-contacto': 'Contacto',
        'promo-badge': '¡Pretemporada de Invierno arranca el 13 de Julio!',
        'hero-title': 'Academia de pádel de alto rendimiento<br><span class="text-red">Ezequiel Britez</span>',
        'hero-subtitle': 'Formación de jugadores iniciantes - juveniles - profesionales. Clases individuales - grupos de entrenamiento - capacitación para profesores.',
        'hero-btn': 'Descubrí la academia',
        'about-title': 'Sobre <span class="text-red">Nosotros</span>',
        'about-subtitle': '9 años formando campeones',
        'about-p1': 'En nuestra academia de pádel, ofrecemos una formación integral para todos los niveles. Desde principiantes hasta jugadores avanzados, vos elegís: clases grupales, donde te encontrás con gente de tu nivel, o clases individuales, totalmente personalizadas.',
        'about-p2': 'Buscamos resolver la falta de información brindando una experiencia organizada y profesional. Somos una de las academias más accesibles y completas, acompañándote en cada paso de tu progreso bajo la dirección de <strong>Ezequiel Orlando Britez</strong>, fundador e instructor.',
        'stat-years': 'Años de Experiencia',
        'stat-focus': 'Enfoque Personalizado',
        'stat-regions': 'Países (AR, BR, PY)',
        'stat-pro': 'Entorno Profesional',
        'services-title': 'Nuestros <span class="text-red">Entrenamientos</span>',
        'services-subtitle': 'Programas adaptados a tus objetivos y nivel de juego.',
        'srv1-title': 'Individual Canasto',
        'srv1-desc': 'Clases 1 a 1 enfocadas en mejorar tu técnica específica, repetición de golpes y corrección de postura en tiempo real.',
        'srv2-title': 'Grupo por Categorías',
        'srv2-desc': 'Entrena con jugadores de tu mismo nivel. Partidos guiados, táctica en pareja y mucha dinámica grupal.',
        'srv3-title': 'Pretemporadas',
        'srv3-desc': 'Preparación física y técnica intensiva para jugadores competitivos que buscan llegar al máximo nivel para los torneos.',
        'srv4-title': 'Cursos para Profesores',
        'srv4-desc': 'Formación integral para futuros instructores de pádel. Metodología de enseñanza, planificación y seguimiento.',
        'btn-consultar': 'Consultar',
        'btn-ver-mas': 'Ver más',
        'modal-course-title': 'Curso de Profesores de Pádel',
        'modal-course-p1': 'Convertite en Profesor de Pádel con la metodología de Academia Ezequiel Britez.',
        'modal-course-p2': 'Aprendé a planificar clases, corregir la técnica de tus alumnos y desarrollar entrenamientos para jugadores de todos los niveles. Descubrí una metodología práctica, enfocada en la enseñanza, la evolución del jugador y la organización profesional de cada clase.',
        'modal-course-h3': '¿Qué vas a aprender?',
        'modal-course-li1': '🎾 Planificación y estructura de clases.',
        'modal-course-li2': '👨‍🏫 Técnicas de enseñanza y corrección de golpes.',
        'modal-course-li3': '📈 Metodologías para clases individuales, grupales y escuelitas.',
        'modal-course-li4': '💪 Organización de entrenamientos físicos y técnicos.',
        'modal-course-li5': '📜 Formación con la metodología de Academia Ezequiel Britez.',
        'modal-course-doc': 'CURSO ENTRENADOR DE PÁDEL - ACADEMIA EZEQUIEL BRITEZ.docx',
        'modal-course-footer': '📲 Consultá por fechas, modalidad y más información.',
        'contact-title': 'Sube tu <span class="text-red">Nivel</span>',
        'contact-desc': '¿Estás listo para empezar? Contáctanos directamente por WhatsApp o síguenos en nuestras redes sociales para ver el día a día de la academia.',
        'location-title': 'Ubicación de la academia',
        'location-desc': 'Cancha Punto Padel<br>Av. Blas Parera 2633, Posadas, Misiones',
        'btn-map': 'Ver en el mapa',
        'footer-rights': 'Todos los derechos reservados.'
    },
    'PT': {
        'nav-inicio': 'Início',
        'nav-nosotros': 'Sobre Nós',
        'nav-servicios': 'Serviços',
        'nav-contacto': 'Contato',
        'promo-badge': 'A Pré-temporada de Inverno começa em 13 de Julho!',
        'hero-title': 'Academia de padel de alto rendimento<br><span class="text-red">Ezequiel Britez</span>',
        'hero-subtitle': 'Formação de jogadores iniciantes - juvenis - profissionais. Aulas individuais - grupos de treinamento - capacitação para professores.',
        'hero-btn': 'Descubra a academia',
        'about-title': 'Sobre <span class="text-red">Nós</span>',
        'about-subtitle': '9 anos formando campeões',
        'about-p1': 'Em nossa academia de padel, oferecemos treinamento abrangente para todos os níveis. Desde iniciantes até jogadores avançados, você escolhe: aulas em grupo, onde você encontra pessoas do seu nível, ou aulas individuais, totalmente personalizadas.',
        'about-p2': 'Buscamos resolver a falta de informação proporcionando uma experiência organizada e profissional. Somos uma das academias mais acessíveis e completas, acompanhando você em cada passo do seu progresso sob a direção de <strong>Ezequiel Orlando Britez</strong>, fundador e instrutor.',
        'stat-years': 'Anos de Experiência',
        'stat-focus': 'Foco Personalizado',
        'stat-regions': 'Países (AR, BR, PY)',
        'stat-pro': 'Ambiente Profissional',
        'services-title': 'Nossos <span class="text-red">Treinamentos</span>',
        'services-subtitle': 'Programas adaptados aos seus objetivos e nível de jogo.',
        'srv1-title': 'Individual Cesto',
        'srv1-desc': 'Aulas 1 a 1 focadas em melhorar sua técnica específica, repetição de golpes e correção de postura em tempo real.',
        'srv2-title': 'Grupo por Categorias',
        'srv2-desc': 'Treine com jogadores do mesmo nível. Partidas guiadas, táticas em duplas e muita dinâmica de grupo.',
        'srv3-title': 'Pré-temporadas',
        'srv3-desc': 'Preparação física e técnica intensiva para jogadores competitivos que buscam atingir o nível máximo para torneios.',
        'srv4-title': 'Cursos para Professores',
        'srv4-desc': 'Treinamento integral para futuros instrutores de padel. Metodologia de ensino, planejamento e acompanhamento.',
        'btn-consultar': 'Consultar',
        'btn-ver-mas': 'Ver mais',
        'modal-course-title': 'Curso de Professores de Padel',
        'modal-course-p1': 'Torne-se Professor de Padel com a metodologia da Academia Ezequiel Britez.',
        'modal-course-p2': 'Aprenda a planejar aulas, corrigir a técnica de seus alunos e desenvolver treinamentos para jogadores de todos os níveis. Descubra uma metodologia prática, focada no ensino, na evolução do jogador e na organização profissional de cada aula.',
        'modal-course-h3': 'O que você vai aprender?',
        'modal-course-li1': '🎾 Planejamento e estrutura de aulas.',
        'modal-course-li2': '👨‍🏫 Técnicas de ensino e correção de golpes.',
        'modal-course-li3': '📈 Metodologias para aulas individuais, em grupo e escolinhas.',
        'modal-course-li4': '💪 Organização de treinamentos físicos e técnicos.',
        'modal-course-li5': '📜 Formação com a metodologia da Academia Ezequiel Britez.',
        'modal-course-doc': 'CURSO TREINADOR DE PADEL - ACADEMIA EZEQUIEL BRITEZ.docx',
        'modal-course-footer': '📲 Consulte datas, modalidade e mais informações.',
        'contact-title': 'Eleve seu <span class="text-red">Nível</span>',
        'contact-desc': 'Pronto para começar? Contate-nos diretamente pelo WhatsApp ou siga-nos em nossas redes sociais para ver o dia a dia da academia.',
        'location-title': 'Localização da academia',
        'location-desc': 'Quadra Punto Padel<br>Av. Blas Parera 2633, Posadas, Misiones',
        'btn-map': 'Ver no mapa',
        'footer-rights': 'Todos os direitos reservados.'
    }
};

let currentLang = 'ES';
const langToggleBtn = document.getElementById('lang-toggle');
const langLabel = document.getElementById('current-lang');
const i18nElements = document.querySelectorAll('[data-i18n]');

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ES' ? 'PT' : 'ES';
    langLabel.textContent = currentLang;
    
    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
});

// Modal Logic
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-modal');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const modal = document.getElementById(targetId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
