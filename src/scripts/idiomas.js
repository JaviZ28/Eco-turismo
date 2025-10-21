/**
 * 🌐 SISTEMA DE IDIOMAS GLOBAL
 * Maneja la traducción entre Español e Inglés en toda la aplicación
 * 
 * @author Sistema Rutas Eco-Comunitarias
 * @version 1.0.0
 */

// Traducciones completas
const traducciones = {
  es: {
    // Navegación
    'nav.inicio': 'Inicio',
    'nav.rutas': 'Rutas',
    'nav.novedades': 'Novedades',
    'nav.ayuda': 'Ayuda',
    'nav.accesibilidad': 'Accesibilidad',
    
    // Botones generales
    'btn.iniciar-sesion': 'Iniciar Sesión',
    'btn.modo-oscuro': 'Modo Oscuro',
    'btn.modo-claro': 'Modo Claro',
    'btn.cerrar': 'Cerrar',
    'btn.aplicar': 'Aplicar',
    'btn.limpiar': 'Limpiar',
    'btn.buscar': 'Buscar',
    'btn.guardar': 'Guardar',
    'btn.compartir': 'Compartir',
    'btn.iniciar': 'Iniciar',
    'btn.ver-mas': 'Ver más',
    'btn.leer-mas': 'Leer más',
    'btn.explorar': 'Explorar',
    'btn.ver-ruta': 'Ver ruta',
    
    // Página de inicio
    'inicio.titulo': 'Descubre Rutas Eco-Comunitarias',
    'inicio.subtitulo': 'Conecta con la naturaleza y las comunidades locales',
    'inicio.descripcion': 'Explora rutas sostenibles que respetan el medio ambiente y benefician a las comunidades locales. Únete a una nueva forma de turismo responsable.',
    'inicio.cta': 'Explorar Rutas',
    'inicio.estadisticas.rutas': 'Rutas Disponibles',
    'inicio.estadisticas.comunidades': 'Comunidades',
    'inicio.estadisticas.experiencias': 'Experiencias',
    
    // Página de rutas
    'rutas.titulo': 'Descubre Rutas Eco-Comunitarias',
    'rutas.descripcion': 'Encuentra la ruta perfecta para tu próxima aventura eco-turística',
    'rutas.buscar.placeholder': 'Buscar rutas por nombre, ubicación o descripción...',
    'rutas.filtros.dificultad': 'Dificultad',
    'rutas.filtros.tipo': 'Tipo',
    'rutas.filtros.duracion': 'Duración',
    'rutas.filtros.distancia': 'Distancia',
    'rutas.filtros.aplicar': 'Aplicar Filtros',
    'rutas.filtros.limpiar': 'Limpiar Filtros',
    'rutas.filtros.todas-dificultades': 'Todas las dificultades',
    'rutas.filtros.cualquier-duracion': 'Cualquier duración',
    'rutas.filtros.todos-tipos': 'Todos los tipos',
    'rutas.filtros.cualquier-distancia': 'Cualquier distancia',
    'rutas.disponibles': 'Rutas disponibles',
    'rutas.contador': 'rutas encontradas',
    'rutas.vista-previa': 'Vista Previa',
    'rutas.guardar': 'Guardar Ruta',
    'rutas.iniciar': 'Iniciar Ruta',
    'rutas.compartir': 'Compartir',
    'rutas.dificultad.facil': 'Fácil',
    'rutas.dificultad.media': 'Media',
    'rutas.dificultad.dificil': 'Difícil',
    'rutas.tipo.senderismo': 'Senderismo',
    'rutas.tipo.ciclismo': 'Ciclismo',
    'rutas.tipo.observacion': 'Observación',
    'rutas.tipo.fotografia': 'Fotografía',
    'rutas.duracion.corta': 'Corta',
    'rutas.duracion.media': 'Media',
    'rutas.duracion.larga': 'Larga',
    'rutas.distancia.corta': 'Corta',
    'rutas.distancia.media': 'Media',
    'rutas.distancia.larga': 'Larga',
    
    // Modal de ruta
    'modal.titulo': 'Vista Previa de Ruta',
    'modal.cerrar': 'Cerrar',
    'modal.mapa': 'Mapa Interactivo',
    'modal.mapa.desc': 'Puntos de interés marcados',
    'modal.puntos-eco': 'Puntos Ecológicos',
    'modal.guardar': 'Guardar Ruta',
    'modal.iniciar': 'Iniciar Ruta',
    'modal.compartir': 'Compartir Experiencia',
    
    // Página de novedades
    'novedades.titulo': 'Novedades Eco-Turísticas',
    'novedades.descripcion': 'Descubre las últimas noticias, rutas destacadas y novedades del mundo del ecoturismo comunitario',
    'novedades.ecoturismo.titulo': '¿Qué es el Ecoturismo?',
    'novedades.ecoturismo.descripcion': 'El ecoturismo es una forma de turismo responsable que se enfoca en la conservación del medio ambiente y el bienestar de las comunidades locales.',
    'novedades.beneficios.titulo': 'Beneficios del Ecoturismo',
    'novedades.beneficios.conservacion': 'Conservación',
    'novedades.beneficios.conservacion.desc': 'Protege y preserva los ecosistemas naturales',
    'novedades.beneficios.comunidad': 'Comunidad',
    'novedades.beneficios.comunidad.desc': 'Apoya el desarrollo económico local',
    'novedades.beneficios.educacion': 'Educación',
    'novedades.beneficios.educacion.desc': 'Promueve la conciencia ambiental',
    'novedades.rutas-destacadas.titulo': 'Rutas Destacadas',
    'novedades.rutas-destacadas.descripcion': 'Descubre las rutas más populares y mejor valoradas por nuestra comunidad',
    'novedades.noticias.titulo': 'Últimas Noticias',
    
    // Página de ayuda
    'ayuda.titulo': 'Centro de Ayuda',
    'ayuda.descripcion': 'Encuentra respuestas a tus preguntas y aprende a usar todas las funcionalidades de nuestra plataforma',
    'ayuda.tabs.general': 'General',
    'ayuda.tabs.rutas': 'Rutas',
    'ayuda.tabs.filtros': 'Filtros',
    'ayuda.tabs.accesibilidad': 'Accesibilidad',
    'ayuda.tabs.contacto': 'Contacto',
    'ayuda.faq.titulo': 'Preguntas Frecuentes',
    'ayuda.rutas.titulo': 'Guía de Rutas',
    'ayuda.filtros.titulo': 'Guía de Filtros',
    'ayuda.accesibilidad.titulo': 'Funciones de Accesibilidad',
    'ayuda.contacto.titulo': 'Contacto y Soporte',
    
    // Accesibilidad
    'accesibilidad.titulo': 'Configuración de Accesibilidad',
    'accesibilidad.modo-oscuro': 'Modo Oscuro',
    'accesibilidad.modo-oscuro.desc': 'Reduce la fatiga visual en ambientes con poca luz',
    'accesibilidad.alto-contraste': 'Alto Contraste',
    'accesibilidad.alto-contraste.desc': 'Mejora la visibilidad con colores de alto contraste',
    'accesibilidad.texto-ampliado': 'Texto Ampliado',
    'accesibilidad.texto-ampliado.desc': 'Amplía el tamaño del texto para mejor legibilidad',
    'accesibilidad.alertas': 'Alertas Visuales',
    'accesibilidad.alertas.desc': 'Notificaciones más visibles y claras',
    'accesibilidad.lectura-voz': 'Lectura por Voz',
    'accesibilidad.lectura-voz.desc': 'Optimizado para lectores de pantalla',
    
    // Estados y mensajes
    'estado.cargando': 'Cargando...',
    'estado.error': 'Error',
    'estado.sin-resultados': 'No se encontraron resultados',
    'estado.sin-sugerencias': 'No se encontraron rutas con',
    
    // Footer
    'footer.derechos': 'Rutas Eco-Comunitarias',
    'footer.institucion': 'Institución:',
    'footer.proyecto': 'Proyecto Comunitario',
    'footer.soporte': 'Soporte / Contacto',
    'footer.terminos': 'Términos y uso',
    
    // FAQ Ayuda
    'ayuda.faq.pregunta1': '¿Qué es Rutas Eco-Comunitarias?',
    'ayuda.faq.respuesta1': 'Es una plataforma que conecta a los amantes de la naturaleza con rutas eco-turísticas sostenibles. Promovemos el turismo responsable que beneficia a las comunidades locales y protege el medio ambiente.',
    'ayuda.faq.pregunta2': '¿Cómo funciona el sistema de puntuación?',
    'ayuda.faq.respuesta2': 'Las rutas se califican del 1 al 5 estrellas basándose en las experiencias de usuarios anteriores. Una puntuación alta indica rutas bien mantenidas, seguras y con excelente experiencia.',
    'ayuda.faq.pregunta3': '¿Es gratis usar la plataforma?',
    'ayuda.faq.respuesta3': 'Sí, nuestra plataforma es completamente gratuita. Solo necesitas registrarte para acceder a todas las funcionalidades, guardar rutas favoritas y compartir tus experiencias.',
    'ayuda.faq.pregunta4': '¿Cómo puedo contribuir con nuevas rutas?',
    'ayuda.faq.respuesta4': 'Si eres un guía local o conoces rutas eco-turísticas, puedes contactarnos para agregar nuevas rutas. Nuestro equipo las revisará y las publicará en la plataforma.',
    
    // Contenido dinámico de base de datos
    'db.rutas.cargando': 'Cargando rutas desde la base de datos...',
    'db.rutas.error': 'Error al cargar las rutas. Por favor, intenta de nuevo.',
    'db.rutas.sin-resultados': 'No se encontraron rutas',
    'db.rutas.sin-resultados.desc': 'Intenta ajustar los filtros o términos de búsqueda',
    'db.rutas.destacadas.cargando': 'Cargando rutas destacadas...',
    'db.rutas.destacadas.error': 'Error al cargar rutas destacadas',
    'db.rutas.destacadas.sin-resultados': 'No hay rutas destacadas disponibles',
    'db.rutas.vista-previa.cargando': 'Cargando ruta...',
    'db.rutas.vista-previa.error': 'Error al cargar los detalles de la ruta.',
    'db.rutas.vista-previa.no-encontrada': 'Ruta no encontrada.',
    'db.rutas.puntos-eco.cargando': 'Cargando puntos ecológicos...',
    'db.rutas.puntos-eco.sin-resultados': 'No hay puntos ecológicos registrados para esta ruta.',
    'db.rutas.guardar.exito': 'Ruta guardada en tus favoritos',
    'db.rutas.iniciar.exito': 'Iniciando ruta:',
    'db.rutas.compartir.exito': 'Enlace copiado al portapapeles',
    'db.rutas.compartir.titulo': 'Mira esta increíble ruta eco-comunitaria:',
    'db.rutas.filtros.aplicando': 'Aplicando filtros...',
    'db.rutas.filtros.error': 'Error al aplicar filtros. Por favor, intenta de nuevo.',
    'db.rutas.filtros.error-inesperado': 'Error inesperado al filtrar rutas.',
    'db.rutas.sugerencias.cargando': 'Obteniendo sugerencias...',
    'db.rutas.sugerencias.error': 'Error al obtener sugerencias',
    'db.rutas.sugerencias.sin-resultados': 'No se encontraron rutas con',
    'db.rutas.reintentar': 'Reintentar'
  },
  
  en: {
    // Navigation
    'nav.inicio': 'Home',
    'nav.rutas': 'Routes',
    'nav.novedades': 'News',
    'nav.ayuda': 'Help',
    'nav.accesibilidad': 'Accessibility',
    
    // General buttons
    'btn.iniciar-sesion': 'Sign In',
    'btn.modo-oscuro': 'Dark Mode',
    'btn.modo-claro': 'Light Mode',
    'btn.cerrar': 'Close',
    'btn.aplicar': 'Apply',
    'btn.limpiar': 'Clear',
    'btn.buscar': 'Search',
    'btn.guardar': 'Save',
    'btn.compartir': 'Share',
    'btn.iniciar': 'Start',
    'btn.ver-mas': 'See more',
    'btn.leer-mas': 'Read more',
    'btn.explorar': 'Explore',
    'btn.ver-ruta': 'View route',
    
    // Home page
    'inicio.titulo': 'Discover Eco-Community Routes',
    'inicio.subtitulo': 'Connect with nature and local communities',
    'inicio.descripcion': 'Explore sustainable routes that respect the environment and benefit local communities. Join a new way of responsible tourism.',
    'inicio.cta': 'Explore Routes',
    'inicio.estadisticas.rutas': 'Available Routes',
    'inicio.estadisticas.comunidades': 'Communities',
    'inicio.estadisticas.experiencias': 'Experiences',
    
    // Routes page
    'rutas.titulo': 'Discover Eco-Community Routes',
    'rutas.descripcion': 'Find the perfect route for your next eco-tourism adventure',
    'rutas.buscar.placeholder': 'Search routes by name, location or description...',
    'rutas.filtros.dificultad': 'Difficulty',
    'rutas.filtros.tipo': 'Type',
    'rutas.filtros.duracion': 'Duration',
    'rutas.filtros.distancia': 'Distance',
    'rutas.filtros.aplicar': 'Apply Filters',
    'rutas.filtros.limpiar': 'Clear Filters',
    'rutas.filtros.todas-dificultades': 'All difficulties',
    'rutas.filtros.cualquier-duracion': 'Any duration',
    'rutas.filtros.todos-tipos': 'All types',
    'rutas.filtros.cualquier-distancia': 'Any distance',
    'rutas.disponibles': 'Available routes',
    'rutas.contador': 'routes found',
    'rutas.vista-previa': 'Preview',
    'rutas.guardar': 'Save Route',
    'rutas.iniciar': 'Start Route',
    'rutas.compartir': 'Share',
    'rutas.dificultad.facil': 'Easy',
    'rutas.dificultad.media': 'Medium',
    'rutas.dificultad.dificil': 'Hard',
    'rutas.tipo.senderismo': 'Hiking',
    'rutas.tipo.ciclismo': 'Cycling',
    'rutas.tipo.observacion': 'Observation',
    'rutas.tipo.fotografia': 'Photography',
    'rutas.duracion.corta': 'Short',
    'rutas.duracion.media': 'Medium',
    'rutas.duracion.larga': 'Long',
    'rutas.distancia.corta': 'Short',
    'rutas.distancia.media': 'Medium',
    'rutas.distancia.larga': 'Long',
    
    // Route modal
    'modal.titulo': 'Route Preview',
    'modal.cerrar': 'Close',
    'modal.mapa': 'Interactive Map',
    'modal.mapa.desc': 'Points of interest marked',
    'modal.puntos-eco': 'Eco Points',
    'modal.guardar': 'Save Route',
    'modal.iniciar': 'Start Route',
    'modal.compartir': 'Share Experience',
    
    // News page
    'novedades.titulo': 'Eco-Tourism News',
    'novedades.descripcion': 'Discover the latest news, featured routes and updates from the eco-tourism community world',
    'novedades.ecoturismo.titulo': 'What is Ecotourism?',
    'novedades.ecoturismo.descripcion': 'Ecotourism is a form of responsible tourism that focuses on environmental conservation and the well-being of local communities.',
    'novedades.beneficios.titulo': 'Benefits of Ecotourism',
    'novedades.beneficios.conservacion': 'Conservation',
    'novedades.beneficios.conservacion.desc': 'Protects and preserves natural ecosystems',
    'novedades.beneficios.comunidad': 'Community',
    'novedades.beneficios.comunidad.desc': 'Supports local economic development',
    'novedades.beneficios.educacion': 'Education',
    'novedades.beneficios.educacion.desc': 'Promotes environmental awareness',
    'novedades.rutas-destacadas.titulo': 'Featured Routes',
    'novedades.rutas-destacadas.descripcion': 'Discover the most popular and highly rated routes by our community',
    'novedades.noticias.titulo': 'Latest News',
    
    // Help page
    'ayuda.titulo': 'Help Center',
    'ayuda.descripcion': 'Find answers to your questions and learn to use all the features of our platform',
    'ayuda.tabs.general': 'General',
    'ayuda.tabs.rutas': 'Routes',
    'ayuda.tabs.filtros': 'Filters',
    'ayuda.tabs.accesibilidad': 'Accessibility',
    'ayuda.tabs.contacto': 'Contact',
    'ayuda.faq.titulo': 'Frequently Asked Questions',
    'ayuda.rutas.titulo': 'Routes Guide',
    'ayuda.filtros.titulo': 'Filters Guide',
    'ayuda.accesibilidad.titulo': 'Accessibility Features',
    'ayuda.contacto.titulo': 'Contact and Support',
    
    // Accessibility
    'accesibilidad.titulo': 'Accessibility Settings',
    'accesibilidad.modo-oscuro': 'Dark Mode',
    'accesibilidad.modo-oscuro.desc': 'Reduces eye strain in low-light environments',
    'accesibilidad.alto-contraste': 'High Contrast',
    'accesibilidad.alto-contraste.desc': 'Improves visibility with high contrast colors',
    'accesibilidad.texto-ampliado': 'Enlarged Text',
    'accesibilidad.texto-ampliado.desc': 'Increases text size for better readability',
    'accesibilidad.alertas': 'Visual Alerts',
    'accesibilidad.alertas.desc': 'More visible and clear notifications',
    'accesibilidad.lectura-voz': 'Voice Reading',
    'accesibilidad.lectura-voz.desc': 'Optimized for screen readers',
    
    // States and messages
    'estado.cargando': 'Loading...',
    'estado.error': 'Error',
    'estado.sin-resultados': 'No results found',
    'estado.sin-sugerencias': 'No routes found with',
    
    // Footer
    'footer.derechos': 'Eco-Community Routes',
    'footer.institucion': 'Institution:',
    'footer.proyecto': 'Community Project',
    'footer.soporte': 'Support / Contact',
    'footer.terminos': 'Terms and use',
    
    // FAQ Help
    'ayuda.faq.pregunta1': 'What is Eco-Community Routes?',
    'ayuda.faq.respuesta1': 'It is a platform that connects nature lovers with sustainable eco-tourism routes. We promote responsible tourism that benefits local communities and protects the environment.',
    'ayuda.faq.pregunta2': 'How does the rating system work?',
    'ayuda.faq.respuesta2': 'Routes are rated from 1 to 5 stars based on previous user experiences. A high score indicates well-maintained, safe routes with excellent experience.',
    'ayuda.faq.pregunta3': 'Is it free to use the platform?',
    'ayuda.faq.respuesta3': 'Yes, our platform is completely free. You just need to register to access all features, save favorite routes and share your experiences.',
    'ayuda.faq.pregunta4': 'How can I contribute with new routes?',
    'ayuda.faq.respuesta4': 'If you are a local guide or know eco-tourism routes, you can contact us to add new routes. Our team will review them and publish them on the platform.',
    
    // Dynamic database content
    'db.rutas.cargando': 'Loading routes from database...',
    'db.rutas.error': 'Error loading routes. Please try again.',
    'db.rutas.sin-resultados': 'No routes found',
    'db.rutas.sin-resultados.desc': 'Try adjusting filters or search terms',
    'db.rutas.destacadas.cargando': 'Loading featured routes...',
    'db.rutas.destacadas.error': 'Error loading featured routes',
    'db.rutas.destacadas.sin-resultados': 'No featured routes available',
    'db.rutas.vista-previa.cargando': 'Loading route...',
    'db.rutas.vista-previa.error': 'Error loading route details.',
    'db.rutas.vista-previa.no-encontrada': 'Route not found.',
    'db.rutas.puntos-eco.cargando': 'Loading eco points...',
    'db.rutas.puntos-eco.sin-resultados': 'No eco points registered for this route.',
    'db.rutas.guardar.exito': 'Route saved to your favorites',
    'db.rutas.iniciar.exito': 'Starting route:',
    'db.rutas.compartir.exito': 'Link copied to clipboard',
    'db.rutas.compartir.titulo': 'Check out this amazing eco-community route:',
    'db.rutas.filtros.aplicando': 'Applying filters...',
    'db.rutas.filtros.error': 'Error applying filters. Please try again.',
    'db.rutas.filtros.error-inesperado': 'Unexpected error filtering routes.',
    'db.rutas.sugerencias.cargando': 'Getting suggestions...',
    'db.rutas.sugerencias.error': 'Error getting suggestions',
    'db.rutas.sugerencias.sin-resultados': 'No routes found with',
    'db.rutas.reintentar': 'Retry'
  }
};

// Estado global del idioma
let idiomaActual = localStorage.getItem('idioma') || 'es';

/**
 * 🌐 Inicializa el sistema de idiomas
 */
export function inicializarIdiomas() {
  // Configurar botón de idioma
  const botonIdioma = document.getElementById('boton-idioma');
  if (botonIdioma) {
    actualizarBotonIdioma();
    botonIdioma.addEventListener('click', cambiarIdioma);
  }

  // Aplicar traducciones al cargar
  aplicarTraducciones();
}

/**
 * 🔄 Cambia el idioma de la aplicación
 */
function cambiarIdioma() {
  idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
  localStorage.setItem('idioma', idiomaActual);
  
  // Actualizar botón
  actualizarBotonIdioma();
  
  // Aplicar traducciones
  aplicarTraducciones();
  
  // Actualizar atributo del documento
  document.documentElement.lang = idiomaActual;
  
  // Notificar cambio
  console.log(`🌐 Idioma cambiado a: ${idiomaActual.toUpperCase()}`);
}

/**
 * 🔄 Actualiza el botón de idioma
 */
function actualizarBotonIdioma() {
  const botonIdioma = document.getElementById('boton-idioma');
  if (botonIdioma) {
    const icono = idiomaActual === 'es' ? '🇪🇸' : '🇺🇸';
    const texto = idiomaActual === 'es' ? 'ES' : 'EN';
    botonIdioma.innerHTML = `${icono} ${texto}`;
  }
}

/**
 * 📝 Aplica todas las traducciones a la página actual
 */
function aplicarTraducciones() {
  // Obtener todos los elementos con atributo data-i18n
  const elementos = document.querySelectorAll('[data-i18n]');
  
  elementos.forEach(elemento => {
    const clave = elemento.getAttribute('data-i18n');
    const traduccion = obtenerTraduccion(clave);
    
    if (traduccion) {
      if (elemento.tagName === 'INPUT' && (elemento.type === 'text' || elemento.type === 'search')) {
        elemento.placeholder = traduccion;
      } else if (elemento.tagName === 'BUTTON' && elemento.type === 'button') {
        // Para botones, mantener el texto original si no hay traducción específica
        if (traduccion !== clave) {
          elemento.textContent = traduccion;
        }
      } else if (elemento.tagName === 'OPTION') {
        // Para opciones de select, mantener el texto original si no hay traducción específica
        if (traduccion !== clave) {
          elemento.textContent = traduccion;
        }
      } else {
        // Para otros elementos, aplicar traducción si existe
        if (traduccion !== clave) {
          elemento.textContent = traduccion;
        }
      }
    }
  });
  
  // Actualizar título de la página
  const titulo = obtenerTraduccion('nav.' + obtenerPaginaActual());
  if (titulo) {
    document.title = `${titulo} — ${obtenerTraduccion('footer.derechos')}`;
  }
}

/**
 * 🔍 Obtiene una traducción por clave
 * @param {string} clave - Clave de la traducción
 * @returns {string} - Texto traducido
 */
export function obtenerTraduccion(clave) {
  return traducciones[idiomaActual]?.[clave] || clave;
}

/**
 * 🌐 Aplica traducciones a elementos dinámicos
 * @param {string} clave - Clave de la traducción
 * @param {string} texto - Texto por defecto
 * @returns {string} - Texto traducido
 */
export function traducirTextoDinamico(clave, texto = '') {
  const traduccion = obtenerTraduccion(clave);
  return traduccion !== clave ? traduccion : texto;
}

/**
 * 🔄 Actualiza traducciones en elementos dinámicos
 * @param {HTMLElement} elemento - Elemento a actualizar
 * @param {string} clave - Clave de la traducción
 */
export function actualizarTraduccionDinamica(elemento, clave) {
  if (elemento) {
    const traduccion = obtenerTraduccion(clave);
    if (traduccion !== clave) {
      elemento.textContent = traduccion;
    }
  }
}

/**
 * 📄 Obtiene la página actual
 * @returns {string} - Nombre de la página actual
 */
function obtenerPaginaActual() {
  const path = window.location.pathname;
  if (path.includes('rutas')) return 'rutas';
  if (path.includes('novedades')) return 'novedades';
  if (path.includes('ayuda')) return 'ayuda';
  return 'inicio';
}

/**
 * ♿ Inicializa el sistema de accesibilidad
 */
export function inicializarAccesibilidad() {
  // Botón para abrir modal de accesibilidad
  const botonAccesibilidad = document.getElementById('abrir-accesibilidad');
  const modalAccesibilidad = document.getElementById('modal-accesibilidad');
  
  if (botonAccesibilidad && modalAccesibilidad) {
    botonAccesibilidad.addEventListener('click', () => {
      abrirModalAccesibilidad();
    });
  }
  
  // Configurar controles de accesibilidad
  configurarControlesAccesibilidad();
}

/**
 * 🚪 Abre el modal de accesibilidad
 */
function abrirModalAccesibilidad() {
  const modal = document.getElementById('modal-accesibilidad');
  if (modal) {
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

/**
 * 🚪 Cierra el modal de accesibilidad
 */
function cerrarModalAccesibilidad() {
  const modal = document.getElementById('modal-accesibilidad');
  if (modal) {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

/**
 * ⚙️ Configura los controles de accesibilidad
 */
function configurarControlesAccesibilidad() {
  const modal = document.getElementById('modal-accesibilidad');
  if (!modal) return;
  
  // Botón cerrar
  const cerrarBtn = document.getElementById('modal-accesibilidad-cerrar');
  if (cerrarBtn) {
    cerrarBtn.addEventListener('click', cerrarModalAccesibilidad);
  }
  
  // Overlay para cerrar
  const overlay = modal.querySelector('.modal__overlay');
  if (overlay) {
    overlay.addEventListener('click', cerrarModalAccesibilidad);
  }
  
  // Escape para cerrar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      cerrarModalAccesibilidad();
    }
  });
  
  // Controles de accesibilidad
  configurarModoOscuro();
  configurarAltoContraste();
  configurarTextoAmpliado();
  configurarAlertas();
  configurarLecturaVoz();
}

/**
 * 🌙 Configura el modo oscuro
 */
function configurarModoOscuro() {
  const boton = document.getElementById('toggle-modo-oscuro');
  if (boton) {
    boton.addEventListener('click', () => {
      // Alternar modo oscuro usando la función existente
      const botonTema = document.getElementById('boton-accesibilidad');
      if (botonTema) {
        botonTema.click();
      }
      actualizarTextoBoton(boton, 'Modo Oscuro', 'Modo Claro');
    });
  }
}

/**
 * ⚡ Configura el alto contraste
 */
function configurarAltoContraste() {
  const boton = document.getElementById('toggle-alto-contraste');
  if (boton) {
    boton.addEventListener('click', () => {
      const activo = document.documentElement.hasAttribute('data-contraste');
      
      if (activo) {
        document.documentElement.removeAttribute('data-contraste');
        localStorage.removeItem('contrasteAlto');
        actualizarTextoBoton(boton, 'Activar Alto Contraste', 'Desactivar Alto Contraste');
      } else {
        document.documentElement.setAttribute('data-contraste', 'alto');
        localStorage.setItem('contrasteAlto', 'true');
        actualizarTextoBoton(boton, 'Desactivar Alto Contraste', 'Activar Alto Contraste');
      }
    });
  }
}

/**
 * 🔍 Configura el texto ampliado
 */
function configurarTextoAmpliado() {
  const aumentarBtn = document.getElementById('aumentar-texto');
  const reducirBtn = document.getElementById('reducir-texto');
  const indicador = document.getElementById('tamaño-texto');
  
  let tamañoActual = parseInt(localStorage.getItem('tamañoTexto') || '100');
  
  if (aumentarBtn) {
    aumentarBtn.addEventListener('click', () => {
      tamañoActual = Math.min(tamañoActual + 10, 150);
      aplicarTamañoTexto(tamañoActual);
      if (indicador) indicador.textContent = `${tamañoActual}%`;
    });
  }
  
  if (reducirBtn) {
    reducirBtn.addEventListener('click', () => {
      tamañoActual = Math.max(tamañoActual - 10, 80);
      aplicarTamañoTexto(tamañoActual);
      if (indicador) indicador.textContent = `${tamañoActual}%`;
    });
  }
  
  // Aplicar tamaño guardado al cargar
  aplicarTamañoTexto(tamañoActual);
  if (indicador) indicador.textContent = `${tamañoActual}%`;
}

/**
 * 📏 Aplica el tamaño de texto
 */
function aplicarTamañoTexto(tamaño) {
  document.documentElement.style.fontSize = `${tamaño}%`;
  localStorage.setItem('tamañoTexto', tamaño.toString());
}

/**
 * 🚨 Configura las alertas visuales
 */
function configurarAlertas() {
  const boton = document.getElementById('toggle-alertas');
  if (boton) {
    boton.addEventListener('click', () => {
      const activo = document.documentElement.hasAttribute('data-alertas');
      
      if (activo) {
        document.documentElement.removeAttribute('data-alertas');
        localStorage.removeItem('alertasActivas');
        actualizarTextoBoton(boton, 'Activar Alertas', 'Desactivar Alertas');
      } else {
        document.documentElement.setAttribute('data-alertas', 'activas');
        localStorage.setItem('alertasActivas', 'true');
        actualizarTextoBoton(boton, 'Desactivar Alertas', 'Activar Alertas');
      }
    });
  }
}

/**
 * 🔊 Configura la lectura por voz
 */
function configurarLecturaVoz() {
  const boton = document.getElementById('toggle-lectura-voz');
  if (boton) {
    boton.addEventListener('click', () => {
      const activo = document.documentElement.hasAttribute('data-lectura-voz');
      
      if (activo) {
        document.documentElement.removeAttribute('data-lectura-voz');
        localStorage.removeItem('lecturaVoz');
        actualizarTextoBoton(boton, 'Activar Lectura', 'Desactivar Lectura');
      } else {
        document.documentElement.setAttribute('data-lectura-voz', 'activa');
        localStorage.setItem('lecturaVoz', 'true');
        actualizarTextoBoton(boton, 'Desactivar Lectura', 'Activar Lectura');
      }
    });
  }
}

/**
 * 🔄 Actualiza el texto de un botón
 */
function actualizarTextoBoton(boton, textoActivo, textoInactivo) {
  const activo = boton.textContent.includes(textoActivo);
  boton.textContent = activo ? textoInactivo : textoActivo;
}

// Aplicar configuraciones guardadas al cargar
document.addEventListener('DOMContentLoaded', () => {
  // Aplicar configuraciones de accesibilidad guardadas
  if (localStorage.getItem('contrasteAlto') === 'true') {
    document.documentElement.setAttribute('data-contraste', 'alto');
  }
  
  if (localStorage.getItem('alertasActivas') === 'true') {
    document.documentElement.setAttribute('data-alertas', 'activas');
  }
  
  if (localStorage.getItem('lecturaVoz') === 'true') {
    document.documentElement.setAttribute('data-lectura-voz', 'activa');
  }
  
  const tamañoTexto = localStorage.getItem('tamañoTexto');
  if (tamañoTexto) {
    document.documentElement.style.fontSize = `${tamañoTexto}%`;
  }
});
