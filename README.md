# 🗺️ Rutas Eco-Comunitarias

Sistema web para la gestión y exploración de rutas eco-turísticas comunitarias, desarrollado con tecnologías modernas y enfoque en la sostenibilidad.

## 🚀 Características Principales

### Para Usuarios (Clientes)
- ✅ **Exploración de rutas**: Catálogo completo de rutas eco-turísticas
- ✅ **Filtros avanzados**: Búsqueda por dificultad, duración, tipo y distancia
- ✅ **Vista previa detallada**: Modal con información completa y puntos ecológicos
- ✅ **Mapa interactivo**: Visualización de rutas y puntos de interés
- ✅ **Sistema de favoritos**: Guardar rutas preferidas
- ✅ **Compartir rutas**: Funcionalidad nativa de compartir
- ✅ **Diseño responsive**: Optimizado para móviles, tablets y desktop
- ✅ **Accesibilidad**: Cumple estándares WCAG 2.1

### Para Administradores
- 🔧 **Gestión completa de rutas**: CRUD completo
- 🔧 **Gestión de puntos ecológicos**: Administración de puntos de interés
- 🔧 **Panel de estadísticas**: Métricas de uso y popularidad
- 🔧 **Gestión de usuarios**: Control de roles y permisos
- 🔧 **Sistema de moderación**: Activar/desactivar contenido

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth
- **Estilos**: CSS Grid, Flexbox, Variables CSS
- **Iconos**: SVG inline
- **Build Tool**: Vite

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Cuenta de Supabase
- Navegador moderno (Chrome, Firefox, Safari, Edge)

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/rutas-eco-comunitarias.git
cd rutas-eco-comunitarias
```

### 2. Instalar Dependencias
```bash
npm install
# o
yarn install
```

### 3. Configurar Supabase

#### 3.1 Crear Proyecto en Supabase
1. Ve a [supabase.com](https://supabase.com)
2. Crea una nueva cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Anota la URL y la clave anónima

#### 3.2 Configurar Variables de Entorno
```bash
# Copiar archivo de ejemplo
cp env.example .env.local

# Editar variables
nano .env.local
```

Configurar las siguientes variables:
```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_aqui
```

#### 3.3 Configurar Base de Datos
1. Ve a la consola de Supabase
2. Navega a SQL Editor
3. Ejecuta el script de `docs/supabase-setup.md`
4. Verifica que las tablas se crearon correctamente

### 4. Ejecutar en Desarrollo
```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
mi-inicio/
├── docs/                          # 📖 Documentación
│   ├── supabase-setup.md          # Configuración de BD
│   ├── sistema-administracion.md  # Sistema de admin
│   └── documentacion-codigo.md    # Documentación técnica
├── pages/                         # 📄 Páginas HTML
│   ├── rutas.html                 # Página principal
│   ├── novedades.html             # Novedades
│   └── ayuda.html                 # Ayuda
├── src/                           # 💻 Código fuente
│   ├── services/
│   │   └── supabase.js           # Servicios de BD
│   ├── scripts/
│   │   └── comunes.ts            # Funciones comunes
│   └── styles.css                # Estilos globales
├── env.example                    # Variables de entorno
└── README.md                      # Este archivo
```

## 🔧 Configuración de Base de Datos

### Esquema Principal

#### Tabla `rutas`
- **id**: Identificador único
- **nombre**: Nombre de la ruta
- **descripcion**: Descripción detallada
- **imagen_url**: URL de la imagen principal
- **dificultad**: Nivel de dificultad (fácil, media, difícil)
- **duracion_horas**: Duración en horas
- **distancia_km**: Distancia en kilómetros
- **ubicacion**: Ubicación geográfica
- **tipo**: Tipo de ruta (senderismo, ciclismo, etc.)
- **puntuacion**: Puntuación de 0 a 5
- **activa**: Estado activo/inactivo
- **creado_por**: ID del usuario creador
- **fecha_creacion**: Fecha de creación
- **fecha_actualizacion**: Fecha de última actualización

#### Tabla `puntos_ecologicos`
- **id**: Identificador único
- **ruta_id**: ID de la ruta relacionada
- **nombre**: Nombre del punto
- **descripcion**: Descripción del punto
- **latitud**: Coordenada de latitud
- **longitud**: Coordenada de longitud
- **orden**: Orden de visita
- **fecha_creacion**: Fecha de creación

#### Tabla `usuarios_perfiles`
- **id**: ID del usuario (referencia a auth.users)
- **nombre**: Nombre del usuario
- **apellido**: Apellido del usuario
- **rol**: Rol del usuario (cliente, administrador)
- **telefono**: Teléfono de contacto
- **fecha_registro**: Fecha de registro
- **activo**: Estado activo/inactivo

## 👥 Roles y Permisos

### Cliente
- ✅ Ver rutas activas
- ✅ Filtrar y buscar rutas
- ✅ Ver detalles de rutas
- ✅ Guardar rutas favoritas
- ❌ No puede modificar contenido

### Administrador
- ✅ Todas las funciones de cliente
- ✅ Crear nuevas rutas
- ✅ Editar rutas existentes
- ✅ Activar/desactivar rutas
- ✅ Eliminar rutas
- ✅ Gestionar puntos ecológicos
- ✅ Ver estadísticas
- ✅ Gestionar usuarios

## 🎨 Personalización

### Variables CSS
```css
:root {
  --primary: #2a7a5f;            /* Color principal */
  --accent: #0d6b9a;             /* Color de acento */
  --bg: #f7f8fb;                 /* Fondo general */
  --card: #ffffff;               /* Fondo de tarjetas */
  --text: #17202a;               /* Color de texto */
}
```

### Modo Oscuro
El sistema incluye soporte completo para modo oscuro con variables CSS específicas.

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: hasta 767px

### Características
- Grid responsive para tarjetas de rutas
- Navegación adaptativa
- Modal optimizado para móviles
- Formularios táctiles

## 🔐 Seguridad

### Autenticación
- Sistema de autenticación con Supabase Auth
- Roles y permisos granulares
- Políticas de seguridad a nivel de fila (RLS)

### Validación
- Sanitización de inputs
- Validación de tipos de archivo
- Límites de tamaño de datos

## 🚀 Despliegue

### Opciones de Hosting
- **Vercel**: Recomendado para Vite
- **Netlify**: Fácil integración
- **GitHub Pages**: Gratuito para proyectos públicos
- **Supabase Hosting**: Integración nativa

### Variables de Producción
```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_produccion
```

## 🐛 Solución de Problemas

### Error de Conexión a Supabase
1. Verificar variables de entorno
2. Comprobar URL y clave anónima
3. Verificar políticas de seguridad

### Error de Permisos
1. Verificar rol de usuario
2. Comprobar políticas RLS
3. Revisar autenticación

### Problemas de Rendimiento
1. Verificar índices de base de datos
2. Optimizar consultas
3. Implementar paginación

## 📊 Monitoreo y Analytics

### Métricas Disponibles
- Rutas más visitadas
- Búsquedas frecuentes
- Tiempo de carga
- Errores de aplicación

### Herramientas Recomendadas
- Supabase Analytics
- Google Analytics
- Sentry para error tracking

## 🤝 Contribución

### Flujo de Trabajo
1. Fork del repositorio
2. Crear rama de feature
3. Realizar cambios
4. Crear pull request
5. Revisión y merge

### Estándares de Código
- Comentarios en español
- Documentación JSDoc
- Tests unitarios
- Linting automático

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- **Desarrollo Frontend**: [Tu Nombre]
- **Desarrollo Backend**: [Compañero]
- **Diseño UX/UI**: [Diseñador]
- **Testing**: [Tester]

## 📞 Soporte

Para soporte técnico o preguntas:
- 📧 Email: soporte@rutas-eco.com
- 💬 Discord: [Servidor del proyecto]
- 📖 Documentación: [Enlace a docs]

## 🔄 Changelog

### v1.0.0 (2025-01-XX)
- ✅ Implementación inicial
- ✅ Sistema de rutas completo
- ✅ Integración con Supabase
- ✅ Sistema de administración
- ✅ Documentación completa

---

**¡Gracias por usar Rutas Eco-Comunitarias! 🌱**
