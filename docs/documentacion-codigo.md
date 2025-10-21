# 📚 Documentación del Código - Rutas Eco-Comunitarias

## 🏗️ Arquitectura del Sistema

### Estructura de Archivos
```
mi-inicio/
├── docs/                          # 📖 Documentación del proyecto
│   ├── supabase-setup.md          # Configuración de Supabase
│   ├── sistema-administracion.md  # Sistema de administración
│   └── documentacion-codigo.md    # Esta documentación
├── pages/                         # 📄 Páginas HTML
│   ├── rutas.html                 # Página principal de rutas
│   ├── novedades.html             # Página de novedades
│   └── ayuda.html                 # Página de ayuda
├── src/                           # 💻 Código fuente
│   ├── services/
│   │   └── supabase.js           # Servicios de base de datos
│   ├── scripts/
│   │   └── comunes.ts            # Funciones comunes
│   └── styles.css                # Estilos globales
├── env.example                    # Variables de entorno
└── package.json                   # Dependencias del proyecto
```

## 🔧 Configuración del Proyecto

### 1. Variables de Entorno
El archivo `env.example` contiene las variables necesarias:
- `VITE_SUPABASE_URL`: URL de tu proyecto Supabase
- `VITE_SUPABASE_ANON_KEY`: Clave anónima de Supabase

### 2. Dependencias Principales
```json
{
  "@supabase/supabase-js": "^2.0.0",
  "vite": "^5.0.0"
}
```

## 📄 Página de Rutas (`pages/rutas.html`)

### Funcionalidades Implementadas

#### 🎯 Hero Section
- **Propósito**: Presentación atractiva de la página
- **Elementos**: Título, descripción y navegación
- **Responsive**: Adaptable a diferentes tamaños de pantalla

#### 🔍 Sistema de Filtros y Búsqueda
- **Barra de búsqueda**: Búsqueda en tiempo real por texto
- **Filtros múltiples**: Dificultad, duración, tipo, distancia
- **Integración Supabase**: Consultas optimizadas a la base de datos

#### 🎴 Tarjetas de Rutas
- **Diseño visual**: Imágenes, badges, metadatos
- **Interactividad**: Hover effects, botones de acción
- **Accesibilidad**: ARIA labels, navegación por teclado

#### 👁️ Modal de Vista Previa
- **Carga asíncrona**: Datos desde Supabase
- **Puntos ecológicos**: Lista dinámica de puntos de interés
- **Mapa interactivo**: Placeholder para integración futura
- **Acciones**: Guardar, iniciar, compartir

### Funciones Principales

#### `inicializarRutas()`
```javascript
/**
 * 🚀 Inicializa la carga de rutas desde Supabase
 * Esta función se ejecuta al cargar la página y obtiene todas las rutas activas
 */
async function inicializarRutas() {
  // 1. Mostrar estado de carga
  // 2. Obtener rutas desde Supabase
  // 3. Convertir datos al formato del frontend
  // 4. Renderizar rutas y actualizar contador
}
```

#### `aplicarFiltros()`
```javascript
/**
 * 🔍 Aplica filtros y búsqueda usando Supabase
 * Esta función se ejecuta cuando el usuario cambia los filtros o busca
 */
async function aplicarFiltros() {
  // 1. Prevenir múltiples llamadas simultáneas
  // 2. Recopilar filtros del formulario
  // 3. Consultar Supabase con filtros
  // 4. Convertir y renderizar resultados
}
```

#### `mostrarModalRuta()`
```javascript
/**
 * 👁️ Muestra el modal con los detalles completos de una ruta
 * Carga los datos desde Supabase incluyendo puntos ecológicos
 */
async function mostrarModalRuta(rutaId) {
  // 1. Mostrar modal con estado de carga
  // 2. Obtener ruta completa desde Supabase
  // 3. Llenar datos del modal
  // 4. Mostrar puntos ecológicos
}
```

## 🗄️ Servicios de Supabase (`src/services/supabase.js`)

### Funciones para Clientes

#### `obtenerRutasFiltradas(filtros)`
- **Propósito**: Obtiene rutas activas con filtros opcionales
- **Parámetros**: Objeto con filtros de búsqueda
- **Retorna**: Array de rutas filtradas
- **Uso**: Búsqueda y filtrado en la página principal

#### `obtenerRutaCompleta(rutaId)`
- **Propósito**: Obtiene una ruta específica con sus puntos ecológicos
- **Parámetros**: ID de la ruta
- **Retorna**: Ruta completa con puntos ecológicos
- **Uso**: Modal de vista previa

#### `obtenerPuntosEcologicos(rutaId)`
- **Propósito**: Obtiene puntos ecológicos de una ruta
- **Parámetros**: ID de la ruta
- **Retorna**: Array de puntos ecológicos
- **Uso**: Detalles adicionales de la ruta

### Funciones para Administradores

#### `obtenerTodasLasRutas()`
- **Propósito**: Obtiene todas las rutas (incluyendo inactivas)
- **Uso**: Panel de administración
- **Permisos**: Solo administradores

#### `crearRuta(rutaData)`
- **Propósito**: Crea una nueva ruta
- **Parámetros**: Datos de la ruta
- **Uso**: Formulario de creación
- **Permisos**: Solo administradores

#### `actualizarRuta(rutaId, rutaData)`
- **Propósito**: Actualiza una ruta existente
- **Parámetros**: ID y nuevos datos
- **Uso**: Formulario de edición
- **Permisos**: Solo administradores

#### `cambiarEstadoRuta(rutaId, activa)`
- **Propósito**: Activa/desactiva una ruta
- **Parámetros**: ID y nuevo estado
- **Uso**: Toggle en panel de administración
- **Permisos**: Solo administradores

#### `eliminarRuta(rutaId)`
- **Propósito**: Elimina una ruta permanentemente
- **Parámetros**: ID de la ruta
- **Uso**: Botón de eliminar
- **Permisos**: Solo administradores

### Funciones de Utilidad

#### `convertirRutaFormato(rutaDB)`
- **Propósito**: Convierte datos de BD al formato del frontend
- **Parámetros**: Ruta desde la base de datos
- **Retorna**: Ruta en formato del frontend
- **Uso**: Transformación de datos

#### `manejarErrorSupabase(error)`
- **Propósito**: Maneja errores de Supabase de forma consistente
- **Parámetros**: Error de Supabase
- **Retorna**: Mensaje de error amigable
- **Uso**: Manejo de errores en toda la aplicación

## 🎨 Estilos CSS (`src/styles.css`)

### Variables de Tema
```css
:root {
  --bg: #f7f8fb;                 /* Fondo general claro */
  --card: #ffffff;               /* Fondo de tarjetas */
  --text: #17202a;               /* Color de texto principal */
  --muted: #6b7280;              /* Texto secundario */
  --primary: #2a7a5f;            /* Verde principal */
  --accent: #0d6b9a;             /* Azul complementario */
}
```

### Componentes Principales

#### Hero Section
- **Clase**: `.hero--rutas`
- **Propósito**: Sección principal de la página
- **Características**: Gradiente, texto centrado, responsive

#### Sistema de Filtros
- **Clase**: `.filtros-seccion`
- **Propósito**: Contenedor de filtros y búsqueda
- **Características**: Grid responsive, inputs estilizados

#### Tarjetas de Rutas
- **Clase**: `.tarjeta-ruta`
- **Propósito**: Tarjetas individuales de rutas
- **Características**: Hover effects, badges, metadatos

#### Modal de Vista Previa
- **Clase**: `.modal`
- **Propósito**: Modal para detalles de ruta
- **Características**: Overlay, animaciones, responsive

### Modo Oscuro
```css
:root[data-contraste="alto"] {
  --bg: #0e0f10;
  --card: #1b1c1e;
  --text: #e4e8eb;
  /* ... más variables oscuras */
}
```

## 🔄 Flujo de Datos

### 1. Carga Inicial
```
Usuario → Página de Rutas → Supabase → Base de Datos
       ← Renderizado ← Datos ← Respuesta ←
```

### 2. Filtrado y Búsqueda
```
Usuario → Filtros → Supabase → Consulta Filtrada → Resultados
       ← Lista Filtrada ← Datos ← Respuesta ←
```

### 3. Vista Previa
```
Usuario → Clic en Ruta → Supabase → Ruta Completa → Modal
       ← Modal Lleno ← Datos + Puntos ← Respuesta ←
```

## 🚨 Manejo de Errores

### Tipos de Errores
1. **Errores de Conexión**: Problemas de red
2. **Errores de Autenticación**: Permisos insuficientes
3. **Errores de Datos**: Información no encontrada
4. **Errores de Validación**: Datos inválidos

### Estrategias de Manejo
1. **Estados de Carga**: Spinners y mensajes informativos
2. **Mensajes de Error**: Alertas amigables al usuario
3. **Fallbacks**: Datos por defecto cuando sea posible
4. **Reintentos**: Botones para reintentar operaciones

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: hasta 767px

### Adaptaciones
- **Grid de rutas**: 3 columnas → 2 columnas → 1 columna
- **Filtros**: Grid horizontal → Grid vertical
- **Modal**: Tamaño completo → Scroll vertical
- **Navegación**: Horizontal → Drawer

## 🔐 Seguridad

### Autenticación
- **Verificación de roles**: Cliente vs Administrador
- **Tokens de sesión**: Validación automática
- **Timeouts**: Sesiones con expiración

### Validación de Datos
- **Sanitización**: Limpieza de inputs
- **Validación de tipos**: Verificación de formatos
- **Límites**: Restricciones de tamaño y cantidad

### Políticas de Acceso
- **RLS (Row Level Security)**: Políticas a nivel de fila
- **Permisos granulares**: Acceso específico por función
- **Auditoría**: Log de acciones administrativas

## 🚀 Optimizaciones

### Rendimiento
- **Lazy Loading**: Carga diferida de imágenes
- **Debouncing**: Retraso en búsquedas
- **Caching**: Almacenamiento temporal de datos
- **Paginación**: Carga por lotes de datos

### SEO
- **Meta tags**: Información de la página
- **Alt text**: Descripciones de imágenes
- **Semantic HTML**: Estructura semántica
- **Schema markup**: Datos estructurados

## 🔧 Mantenimiento

### Logs y Debugging
- **Console logs**: Información de desarrollo
- **Error tracking**: Captura de errores
- **Performance monitoring**: Métricas de rendimiento

### Actualizaciones
- **Versionado**: Control de versiones
- **Migraciones**: Actualizaciones de base de datos
- **Backwards compatibility**: Compatibilidad hacia atrás

## 📊 Métricas y Analytics

### Datos Recopilados
- **Rutas más visitadas**: Popularidad
- **Búsquedas frecuentes**: Tendencias
- **Tiempo de carga**: Performance
- **Errores**: Estabilidad

### Reportes
- **Dashboard administrativo**: Vista general
- **Reportes de uso**: Estadísticas de usuarios
- **Análisis de rendimiento**: Optimizaciones
