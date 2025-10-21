# 👨‍💼 Sistema de Administración - Rutas Eco-Comunitarias

## 🎯 Descripción General

El sistema de administración permite a los administradores gestionar completamente las rutas eco-comunitarias, incluyendo su creación, edición, activación/desactivación y eliminación.

## 🔐 Roles y Permisos

### Administrador
- ✅ Crear nuevas rutas
- ✅ Editar rutas existentes
- ✅ Activar/desactivar rutas
- ✅ Eliminar rutas
- ✅ Gestionar puntos ecológicos
- ✅ Ver estadísticas de uso

### Cliente
- ✅ Ver rutas activas
- ✅ Filtrar y buscar rutas
- ✅ Ver detalles de rutas
- ✅ Guardar rutas favoritas
- ❌ No puede modificar contenido

## 📱 Interfaz de Administración

### 1. Panel Principal de Administración
**Ruta:** `/admin/dashboard`
**Descripción:** Vista general con estadísticas y acceso rápido a funciones

**Componentes:**
- Tarjeta de estadísticas (total rutas, rutas activas, usuarios)
- Lista de rutas recientes
- Acciones rápidas (crear ruta, ver reportes)
- Filtros para gestionar rutas

### 2. Gestión de Rutas
**Ruta:** `/admin/rutas`
**Descripción:** CRUD completo de rutas

#### Lista de Rutas
- Tabla con todas las rutas (activas e inactivas)
- Filtros por estado, dificultad, tipo
- Búsqueda por nombre o ubicación
- Acciones por fila: editar, activar/desactivar, eliminar

#### Formulario de Creación/Edición
**Campos requeridos:**
- Nombre de la ruta
- Descripción detallada
- Imagen principal (upload o URL)
- Dificultad (fácil, media, difícil)
- Duración en horas
- Distancia en kilómetros
- Ubicación
- Tipo de ruta
- Puntuación inicial

**Campos opcionales:**
- Coordenadas GPS
- Instrucciones especiales
- Equipamiento recomendado
- Mejor época para visitar

### 3. Gestión de Puntos Ecológicos
**Ruta:** `/admin/rutas/[id]/puntos`
**Descripción:** Gestión de puntos de interés para cada ruta

#### Funcionalidades:
- Lista de puntos ecológicos por ruta
- Agregar nuevo punto
- Editar punto existente
- Reordenar puntos (drag & drop)
- Eliminar punto
- Coordenadas GPS opcionales

#### Formulario de Punto Ecológico:
- Nombre del punto
- Descripción
- Coordenadas (latitud, longitud)
- Orden en la ruta
- Imagen opcional

### 4. Gestión de Usuarios
**Ruta:** `/admin/usuarios`
**Descripción:** Gestión de usuarios y roles

#### Funcionalidades:
- Lista de usuarios registrados
- Cambiar rol (cliente/administrador)
- Activar/desactivar usuarios
- Ver perfil de usuario
- Estadísticas de actividad

## 🗂️ Estructura de Archivos para Administración

```
src/
├── admin/
│   ├── components/
│   │   ├── RutasTable.vue          # Tabla de gestión de rutas
│   │   ├── RutaForm.vue            # Formulario de ruta
│   │   ├── PuntosEcoManager.vue    # Gestión de puntos ecológicos
│   │   ├── UsuariosTable.vue       # Tabla de usuarios
│   │   └── StatsCards.vue          # Tarjetas de estadísticas
│   ├── pages/
│   │   ├── Dashboard.vue           # Panel principal
│   │   ├── Rutas.vue               # Lista de rutas
│   │   ├── RutaForm.vue            # Crear/editar ruta
│   │   ├── PuntosEco.vue           # Gestión de puntos
│   │   └── Usuarios.vue            # Gestión de usuarios
│   └── services/
│       ├── rutasService.js         # API calls para rutas
│       ├── puntosService.js        # API calls para puntos
│       └── usuariosService.js      # API calls para usuarios
```

## 🔧 Funciones de API para Administración

### Rutas Service
```javascript
// Obtener todas las rutas (incluyendo inactivas)
async function obtenerTodasLasRutas() {
  const { data, error } = await supabase
    .from('rutas')
    .select('*')
    .order('fecha_creacion', { ascending: false });
  return { data, error };
}

// Crear nueva ruta
async function crearRuta(rutaData) {
  const { data, error } = await supabase
    .from('rutas')
    .insert([rutaData])
    .select();
  return { data, error };
}

// Actualizar ruta
async function actualizarRuta(id, rutaData) {
  const { data, error } = await supabase
    .from('rutas')
    .update(rutaData)
    .eq('id', id)
    .select();
  return { data, error };
}

// Cambiar estado de ruta
async function cambiarEstadoRuta(id, activa) {
  const { data, error } = await supabase
    .from('rutas')
    .update({ activa })
    .eq('id', id)
    .select();
  return { data, error };
}

// Eliminar ruta
async function eliminarRuta(id) {
  const { data, error } = await supabase
    .from('rutas')
    .delete()
    .eq('id', id);
  return { data, error };
}
```

### Puntos Ecológicos Service
```javascript
// Obtener puntos de una ruta
async function obtenerPuntosEco(rutaId) {
  const { data, error } = await supabase
    .from('puntos_ecologicos')
    .select('*')
    .eq('ruta_id', rutaId)
    .order('orden');
  return { data, error };
}

// Crear punto ecológico
async function crearPuntoEco(puntoData) {
  const { data, error } = await supabase
    .from('puntos_ecologicos')
    .insert([puntoData])
    .select();
  return { data, error };
}

// Actualizar punto ecológico
async function actualizarPuntoEco(id, puntoData) {
  const { data, error } = await supabase
    .from('puntos_ecologicos')
    .update(puntoData)
    .eq('id', id)
    .select();
  return { data, error };
}

// Reordenar puntos
async function reordenarPuntos(puntos) {
  const updates = puntos.map((punto, index) => ({
    id: punto.id,
    orden: index + 1
  }));
  
  const { data, error } = await supabase
    .from('puntos_ecologicos')
    .upsert(updates);
  return { data, error };
}
```

## 📊 Validaciones y Reglas de Negocio

### Validaciones de Ruta
- Nombre: mínimo 5 caracteres, máximo 100
- Descripción: mínimo 20 caracteres, máximo 1000
- Duración: entre 0.5 y 12 horas
- Distancia: entre 0.1 y 50 km
- Puntuación: entre 0 y 5
- Imagen: URL válida o archivo subido

### Validaciones de Punto Ecológico
- Nombre: mínimo 3 caracteres, máximo 100
- Descripción: mínimo 10 caracteres, máximo 500
- Coordenadas: formato decimal válido
- Orden: número entero positivo

## 🚨 Consideraciones de Seguridad

### Autenticación
- Verificar rol de administrador en cada endpoint
- Tokens de sesión válidos
- Timeout de sesión configurado

### Validación de Datos
- Sanitización de inputs
- Validación de tipos de archivo
- Límites de tamaño de archivos
- Escape de caracteres especiales

### Auditoría
- Log de todas las acciones administrativas
- Registro de cambios en rutas
- Historial de modificaciones

## 📱 Responsive Design

### Desktop (1024px+)
- Layout de 3 columnas
- Tablas completas con todas las columnas
- Formularios en 2 columnas
- Sidebar de navegación

### Tablet (768px - 1023px)
- Layout de 2 columnas
- Tablas con scroll horizontal
- Formularios en 1 columna
- Navegación en tabs

### Mobile (hasta 767px)
- Layout de 1 columna
- Cards en lugar de tablas
- Formularios optimizados para móvil
- Navegación en drawer

## 🎨 Componentes Reutilizables

### FormField
```vue
<FormField
  :label="'Nombre de la ruta'"
  :type="'text'"
  :required="true"
  :maxlength="100"
  v-model="ruta.nombre"
  :error="errores.nombre"
/>
```

### DataTable
```vue
<DataTable
  :columns="columnasRutas"
  :data="rutas"
  :loading="cargando"
  :actions="accionesRutas"
  @edit="editarRuta"
  @delete="eliminarRuta"
  @toggle="cambiarEstado"
/>
```

### ImageUpload
```vue
<ImageUpload
  v-model="ruta.imagen_url"
  :max-size="5"
  :allowed-types="['image/jpeg', 'image/png', 'image/webp']"
  :preview="true"
/>
```

## 📈 Métricas y Analytics

### Dashboard Principal
- Total de rutas creadas
- Rutas más populares
- Usuarios activos
- Rutas por dificultad
- Crecimiento mensual

### Reportes Disponibles
- Rutas por administrador
- Puntos ecológicos más visitados
- Tendencias de búsqueda
- Feedback de usuarios

## 🔄 Flujo de Trabajo Recomendado

1. **Crear Ruta Base**
   - Información básica
   - Imagen principal
   - Categorización

2. **Agregar Puntos Ecológicos**
   - Definir puntos de interés
   - Coordenadas GPS
   - Orden de visita

3. **Revisar y Activar**
   - Verificar información
   - Probar enlaces
   - Activar para usuarios

4. **Monitorear**
   - Revisar feedback
   - Actualizar información
   - Mantener puntos actualizados
