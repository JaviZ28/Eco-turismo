/* main.ts - comportamiento de la página inicio
   Nota: usamos nombres en español para mayor claridad en el equipo.
*/

/* ---------- SELECTORES Y VARIABLES GLOBALES ---------- */
// Elementos del DOM
const buscador = document.getElementById('buscador') as HTMLInputElement | null;
const listaNovedades = document.getElementById('lista-novedades') as HTMLUListElement | null;
const botonIdioma = document.getElementById('boton-idioma') as HTMLButtonElement | null;
const botonAccesibilidad = document.getElementById('boton-accesibilidad') as HTMLButtonElement | null;
const menuToggle = document.getElementById('menuToggle') as HTMLButtonElement | null;
const menuItems = document.getElementById('menuItems') as HTMLElement | null;
const botonVerRutas = document.getElementById('ver-rutas') as HTMLButtonElement | null;
const cuerpo = document.querySelector('body') as HTMLBodyElement;

/* Estado de la UI (simplificado) */
let idiomaActual: 'es'|'en' = 'es';
let contrasteAlto = false;

/* ---------- FUNCIONES UTILES (documentadas) ---------- */

/**
 * inicializarApp
 * Función que ejecuta la configuración inicial de la interfaz:
 * - agrega listeners
 * - rellena secciones estáticas (novedades demo)
 */
function inicializarApp(){
  // Listener: buscar con tecla Enter
  buscador?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      realizarBusqueda(buscador.value);
    }
  });

  // Botón idioma: alterna ES/EN (solo UI por ahora)
  botonIdioma?.addEventListener('click', () => {
    idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
    actualizarIdiomaUI();
  });

  // Botón accesibilidad: abre opciones (modo simple: alterna contraste)
  botonAccesibilidad?.addEventListener('click', () => {
    contrasteAlto = !contrasteAlto;
    document.documentElement.setAttribute('data-contraste', contrasteAlto ? 'alto' : 'normal');
    botonAccesibilidad?.setAttribute('aria-expanded', String(contrasteAlto));
  });

  // Toggle menú (en móvil)
  menuToggle?.addEventListener('click', () => {
    const abierto = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!abierto));
    if(menuItems){
      menuItems.style.display = abierto ? 'none' : 'flex';
    }
  });

  // Acción del botón ver rutas (navegación placeholder)
  botonVerRutas?.addEventListener('click', () => {
    // Aquí normalmente redirigirías a /rutas o cargarias la vista rutas
    alert(idiomaActual === 'es' ? 'Ir a la sección de Rutas (placeholder)' : 'Go to Routes section (placeholder)');
  });

  // Cargar novedades demo (más adelante lo obtendremos desde Supabase)
  cargarNovedadesDemo();

  // Mejora: conservar preferencia de contraste en localStorage (simple)
  const contrasteGuardado = localStorage.getItem('contrasteAlto');
  if (contrasteGuardado === 'true') {
    contrasteAlto = true;
    document.documentElement.setAttribute('data-contraste', 'alto');
  }

  // Control de accesibilidad de tamaño de letra con atajos (Ctrl + + / -)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === '+') {
      cuerpo.classList.add('tamano-letra--grande');
    } else if ((e.ctrlKey || e.metaKey) && e.key === '-') {
      cuerpo.classList.remove('tamano-letra--grande');
    }
  });
}

/**
 * realizarBusqueda(termino)
 * Simula una búsqueda: en la versión final consultará Supabase.
 */
function realizarBusqueda(termino: string){
  if (!termino || termino.trim().length === 0) {
    alert(idiomaActual === 'es' ? 'Introduce un término de búsqueda' : 'Enter a search term');
    return;
  }
  // Actualmente navegamos a resultados con querystring (placeholder)
  console.log('Buscar:', termino);
  // En implementación real: llamar a Supabase para filtrar rutas.
  alert((idiomaActual === 'es' ? 'Buscando:' : 'Searching:') + ' ' + termino);
}

/**
 * cargarNovedadesDemo
 * Rellena la lista de novedades con datos estáticos para la demo.
 * En la fase de integración se reemplaza con llamadas a Supabase.
 */
function cargarNovedadesDemo(){
  const demo = [
    {titulo: 'Nueva ruta por la Reserva El Bosque', fecha: '2025-10-01', descripcion: 'Ruta guiada los sábados.'},
    {titulo: 'Taller comunitario: conservación', fecha: '2025-09-20', descripcion: 'Aprende sobre prácticas sostenibles.'}
  ];
  if (!listaNovedades) return;
  listaNovedades.innerHTML = ''; // limpiar
  demo.forEach(item => {
    const li = document.createElement('li');
    li.className = 'novedad';
    li.innerHTML = `<strong>${item.titulo}</strong> <div><small>${item.fecha}</small></div><p>${item.descripcion}</p>`;
    listaNovedades.appendChild(li);
  });
}

/**
 * actualizarIdiomaUI
 * Cambia textos de la UI básicos (solo los más visibles).
 * Para internacionalización real usar un sistema de i18n.
 */
function actualizarIdiomaUI(){
  const tituloBienvenida = document.getElementById('titulo-bienvenida');
  const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
  const botonAyuda = document.getElementById('boton-ayuda') as HTMLButtonElement | null;
  if (idiomaActual === 'es') {
    tituloBienvenida!.textContent = 'Bienvenido/a a Rutas Eco-Comunitarias';
    mensajeBienvenida!.textContent = 'Explora rutas creadas por la comunidad y descubre lugares naturales cerca de ti.';
    botonAyuda!.textContent = 'Ayuda';
    botonIdioma!.textContent = 'ES / EN';
  } else {
    tituloBienvenida!.textContent = 'Welcome to Community Eco-Routes';
    mensajeBienvenida!.textContent = 'Explore community-created routes and discover natural places near you.';
    botonAyuda!.textContent = 'Help';
    botonIdioma!.textContent = 'EN / ES';
  }
}

/* ---------- INICIALIZACIÓN ---------- */
document.addEventListener('DOMContentLoaded', () => {
  inicializarApp();
});
