// comunes.ts - Funciones compartidas entre páginas
// -----------------------------------------------

/**
 * Inicializa el modo oscuro/claro con persistencia local
 */
export function inicializarTema() {
  const botonAccesibilidad = document.getElementById('boton-accesibilidad') as HTMLButtonElement | null;
  let contrasteAlto = false;

  // Cargar preferencia guardada
  const guardado = localStorage.getItem('contrasteAlto');
  if (guardado === 'true') {
    contrasteAlto = true;
    document.documentElement.setAttribute('data-contraste', 'alto');
    if (botonAccesibilidad) botonAccesibilidad.textContent = 'Modo claro';
  }

  botonAccesibilidad?.addEventListener('click', () => {
    contrasteAlto = !contrasteAlto;
    document.documentElement.setAttribute('data-contraste', contrasteAlto ? 'alto' : 'normal');
    botonAccesibilidad!.textContent = contrasteAlto ? 'Modo claro' : 'Modo oscuro';
    localStorage.setItem('contrasteAlto', String(contrasteAlto));
  });
}

/**
 * Actualiza automáticamente el año del pie de página
 */
export function actualizarAnio() {
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
}

/**
 * Inicializa el menú lateral expandible con persistencia de estado
 */
export function inicializarMenu() {
  const menuToggle = document.getElementById('menuToggle') as HTMLButtonElement | null;
  const menuItems = document.getElementById('menuItems') as HTMLElement | null;

  // Recuperar estado guardado (por defecto abierto en escritorio)
  const guardado = localStorage.getItem('menuAbierto');
  const menuAbierto = guardado === null ? true : guardado === 'true';

  if (menuToggle && menuItems) {
    menuToggle.setAttribute('aria-expanded', String(menuAbierto));
    menuItems.style.display = menuAbierto ? 'flex' : 'none';

    // Escuchar clics para alternar el menú
    menuToggle.addEventListener('click', () => {
      const abierto = menuToggle.getAttribute('aria-expanded') === 'true';
      const nuevoEstado = !abierto;
      menuToggle.setAttribute('aria-expanded', String(nuevoEstado));
      menuItems.style.display = nuevoEstado ? 'flex' : 'none';
      localStorage.setItem('menuAbierto', String(nuevoEstado)); // guardar preferencia
    });
  }

  // Opcional: auto-ajuste al tamaño de pantalla
  window.addEventListener('resize', () => {
    if (!menuItems) return;
    if (window.innerWidth > 800) {
      menuItems.style.display = 'flex';
    } else {
      const guardado = localStorage.getItem('menuAbierto');
      const abierto = guardado === 'true';
      menuItems.style.display = abierto ? 'flex' : 'none';
    }
  });
}
