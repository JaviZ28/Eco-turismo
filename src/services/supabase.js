/**
 * 🔗 Servicio de Supabase para Rutas Eco-Comunitarias
 * 
 * Este archivo contiene todas las funciones para interactuar con la base de datos
 * de Supabase. Incluye funciones para clientes (ver rutas) y administradores (gestionar rutas).
 * 
 * @author Sistema Rutas Eco-Comunitarias
 * @version 1.0.0
 */

import { createClient } from '@supabase/supabase-js'

// Configuración de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Verificar que las variables de entorno estén configuradas
if (!supabaseUrl || !supabaseKey) {
  throw new Error(`
    ❌ Error de configuración de Supabase
    
    Las siguientes variables de entorno son requeridas:
    - VITE_SUPABASE_URL
    - VITE_SUPABASE_ANON_KEY
    
    Por favor, configura tu archivo .env.local con las credenciales de Supabase.
    Consulta la documentación en docs/supabase-setup.md para más información.
  `)
}

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * 🗺️ SERVICIOS PARA CLIENTES (Vista de Rutas)
 */

/**
 * Obtiene todas las rutas activas con filtros opcionales
 * @param {Object} filtros - Objeto con filtros de búsqueda
 * @param {string} filtros.busqueda - Texto de búsqueda
 * @param {string} filtros.dificultad - Filtro por dificultad
 * @param {string} filtros.tipo - Filtro por tipo de ruta
 * @param {string} filtros.duracion - Filtro por duración
 * @param {string} filtros.distancia - Filtro por distancia
 * @returns {Promise<Object>} - Objeto con data y error
 */
export async function obtenerRutasFiltradas(filtros = {}) {
  try {
    let query = supabase
      .from('rutas')
      .select(`
        id,
        nombre,
        descripcion,
        imagen_url,
        dificultad,
        duracion_horas,
        distancia_km,
        ubicacion,
        tipo,
        puntuacion
      `)
      .eq('activa', true)

    // Aplicar filtros de búsqueda
    if (filtros.busqueda) {
      query = query.or(`nombre.ilike.%${filtros.busqueda}%,descripcion.ilike.%${filtros.busqueda}%,ubicacion.ilike.%${filtros.busqueda}%`)
    }

    // Aplicar filtro de dificultad
    if (filtros.dificultad) {
      query = query.eq('dificultad', filtros.dificultad)
    }

    // Aplicar filtro de tipo
    if (filtros.tipo) {
      query = query.eq('tipo', filtros.tipo)
    }

    // Aplicar filtros de duración
    if (filtros.duracion === 'corta') {
      query = query.lt('duracion_horas', 1)
    } else if (filtros.duracion === 'media') {
      query = query.gte('duracion_horas', 1).lte('duracion_horas', 3)
    } else if (filtros.duracion === 'larga') {
      query = query.gt('duracion_horas', 3)
    }

    // Aplicar filtros de distancia
    if (filtros.distancia === 'corta') {
      query = query.lt('distancia_km', 2)
    } else if (filtros.distancia === 'media') {
      query = query.gte('distancia_km', 2).lte('distancia_km', 5)
    } else if (filtros.distancia === 'larga') {
      query = query.gt('distancia_km', 5)
    }

    // Ordenar por puntuación y fecha
    query = query.order('puntuacion', { ascending: false })
                .order('fecha_creacion', { ascending: false })

    const { data, error } = await query

    if (error) {
      console.error('Error al obtener rutas:', error)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error inesperado al obtener rutas:', error)
    return { data: null, error }
  }
}

/**
 * Obtiene una ruta específica por ID con sus puntos ecológicos
 * @param {number} rutaId - ID de la ruta
 * @returns {Promise<Object>} - Objeto con data y error
 */
export async function obtenerRutaCompleta(rutaId) {
  try {
    // Obtener datos de la ruta
    const { data: ruta, error: errorRuta } = await supabase
      .from('rutas')
      .select('*')
      .eq('id', rutaId)
      .eq('activa', true)
      .single()

    if (errorRuta) {
      console.error('Error al obtener ruta:', errorRuta)
      return { data: null, error: errorRuta }
    }

    // Obtener puntos ecológicos de la ruta
    const { data: puntos, error: errorPuntos } = await supabase
      .from('puntos_ecologicos')
      .select('*')
      .eq('ruta_id', rutaId)
      .order('orden')

    if (errorPuntos) {
      console.error('Error al obtener puntos ecológicos:', errorPuntos)
      return { data: null, error: errorPuntos }
    }

    // Combinar datos
    const rutaCompleta = {
      ...ruta,
      puntosEco: puntos || []
    }

    return { data: rutaCompleta, error: null }
  } catch (error) {
    console.error('Error inesperado al obtener ruta completa:', error)
    return { data: null, error }
  }
}

/**
 * Obtiene los puntos ecológicos de una ruta específica
 * @param {number} rutaId - ID de la ruta
 * @returns {Promise<Object>} - Objeto con data y error
 */
export async function obtenerPuntosEcologicos(rutaId) {
  try {
    const { data, error } = await supabase
      .from('puntos_ecologicos')
      .select('*')
      .eq('ruta_id', rutaId)
      .order('orden')

    if (error) {
      console.error('Error al obtener puntos ecológicos:', error)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error inesperado al obtener puntos ecológicos:', error)
    return { data: null, error }
  }
}

/**
 * Obtiene sugerencias de búsqueda para autocompletado
 * @param {string} termino - Término de búsqueda
 * @returns {Promise<Object>} - Objeto con data y error
 */
export async function obtenerSugerencias(termino) {
  try {
    const { data, error } = await supabase
      .from('rutas')
      .select(`
        id,
        nombre,
        ubicacion,
        dificultad,
        duracion_horas,
        distancia_km
      `)
      .eq('activa', true)
      .or(`nombre.ilike.%${termino}%,ubicacion.ilike.%${termino}%`)
      .order('puntuacion', { ascending: false })
      .limit(5)

    if (error) {
      console.error('Error al obtener sugerencias:', error)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error inesperado al obtener sugerencias:', error)
    return { data: null, error }
  }
}

/**
 * 🔐 SERVICIOS DE AUTENTICACIÓN
 */

/**
 * Obtiene el usuario actual autenticado
 * @returns {Promise<Object>} - Usuario actual o null
 */
export async function obtenerUsuarioActual() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      console.error('Error al obtener usuario:', error)
      return null
    }

    return user
  } catch (error) {
    console.error('Error inesperado al obtener usuario:', error)
    return null
  }
}

/**
 * Verifica si el usuario actual es administrador
 * @returns {Promise<boolean>} - true si es administrador
 */
export async function esAdministrador() {
  try {
    const user = await obtenerUsuarioActual()
    if (!user) return false

    const { data, error } = await supabase
      .from('usuarios_perfiles')
      .select('rol')
      .eq('id', user.id)
      .single()

    if (error) {
      console.error('Error al verificar rol:', error)
      return false
    }

    return data?.rol === 'administrador'
  } catch (error) {
    console.error('Error inesperado al verificar rol:', error)
    return false
  }
}

/**
 * 👨‍💼 SERVICIOS PARA ADMINISTRADORES
 */

/**
 * Obtiene todas las rutas (incluyendo inactivas) para administradores
 * @returns {Promise<Object>} - Objeto con data y error
 */
export async function obtenerTodasLasRutas() {
  try {
    const { data, error } = await supabase
      .from('rutas')
      .select('*')
      .order('fecha_creacion', { ascending: false })

    if (error) {
      console.error('Error al obtener todas las rutas:', error)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error inesperado al obtener todas las rutas:', error)
    return { data: null, error }
  }
}

/**
 * Crea una nueva ruta (solo administradores)
 * @param {Object} rutaData - Datos de la nueva ruta
 * @returns {Promise<Object>} - Objeto con data y error
 */
export async function crearRuta(rutaData) {
  try {
    const { data, error } = await supabase
      .from('rutas')
      .insert([rutaData])
      .select()

    if (error) {
      console.error('Error al crear ruta:', error)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error inesperado al crear ruta:', error)
    return { data: null, error }
  }
}

/**
 * Actualiza una ruta existente (solo administradores)
 * @param {number} rutaId - ID de la ruta
 * @param {Object} rutaData - Nuevos datos de la ruta
 * @returns {Promise<Object>} - Objeto con data y error
 */
export async function actualizarRuta(rutaId, rutaData) {
  try {
    const { data, error } = await supabase
      .from('rutas')
      .update(rutaData)
      .eq('id', rutaId)
      .select()

    if (error) {
      console.error('Error al actualizar ruta:', error)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error inesperado al actualizar ruta:', error)
    return { data: null, error }
  }
}

/**
 * Cambia el estado activo/inactivo de una ruta
 * @param {number} rutaId - ID de la ruta
 * @param {boolean} activa - Nuevo estado
 * @returns {Promise<Object>} - Objeto con data y error
 */
export async function cambiarEstadoRuta(rutaId, activa) {
  try {
    const { data, error } = await supabase
      .from('rutas')
      .update({ activa })
      .eq('id', rutaId)
      .select()

    if (error) {
      console.error('Error al cambiar estado de ruta:', error)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error inesperado al cambiar estado de ruta:', error)
    return { data: null, error }
  }
}

/**
 * Elimina una ruta (solo administradores)
 * @param {number} rutaId - ID de la ruta
 * @returns {Promise<Object>} - Objeto con data y error
 */
export async function eliminarRuta(rutaId) {
  try {
    const { data, error } = await supabase
      .from('rutas')
      .delete()
      .eq('id', rutaId)

    if (error) {
      console.error('Error al eliminar ruta:', error)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error inesperado al eliminar ruta:', error)
    return { data: null, error }
  }
}

/**
 * 📊 SERVICIOS DE ESTADÍSTICAS
 */

/**
 * Obtiene estadísticas generales del sistema
 * @returns {Promise<Object>} - Objeto con estadísticas
 */
export async function obtenerEstadisticas() {
  try {
    // Obtener total de rutas
    const { count: totalRutas } = await supabase
      .from('rutas')
      .select('*', { count: 'exact', head: true })

    // Obtener rutas activas
    const { count: rutasActivas } = await supabase
      .from('rutas')
      .select('*', { count: 'exact', head: true })
      .eq('activa', true)

    // Obtener total de usuarios
    const { count: totalUsuarios } = await supabase
      .from('usuarios_perfiles')
      .select('*', { count: 'exact', head: true })

    return {
      totalRutas: totalRutas || 0,
      rutasActivas: rutasActivas || 0,
      totalUsuarios: totalUsuarios || 0
    }
  } catch (error) {
    console.error('Error al obtener estadísticas:', error)
    return {
      totalRutas: 0,
      rutasActivas: 0,
      totalUsuarios: 0
    }
  }
}

/**
 * 🔄 FUNCIONES DE UTILIDAD
 */

/**
 * Convierte los datos de la base de datos al formato esperado por el frontend
 * @param {Object} rutaDB - Ruta desde la base de datos
 * @returns {Object} - Ruta en formato del frontend
 */
export function convertirRutaFormato(rutaDB) {
  return {
    id: rutaDB.id,
    nombre: rutaDB.nombre,
    descripcion: rutaDB.descripcion,
    imagen: rutaDB.imagen_url,
    dificultad: rutaDB.dificultad,
    duracion: `${rutaDB.duracion_horas}h`,
    distancia: `${rutaDB.distancia_km} km`,
    ubicacion: rutaDB.ubicacion,
    tipo: rutaDB.tipo,
    puntuacion: rutaDB.puntuacion,
    puntosEco: rutaDB.puntosEco || []
  }
}

/**
 * Maneja errores de Supabase de forma consistente
 * @param {Object} error - Error de Supabase
 * @returns {string} - Mensaje de error amigable
 */
export function manejarErrorSupabase(error) {
  if (error?.message) {
    return error.message
  }
  
  if (error?.code) {
    switch (error.code) {
      case 'PGRST116':
        return 'No se encontraron datos'
      case '23505':
        return 'Ya existe un registro con estos datos'
      case '23503':
        return 'No se puede eliminar porque tiene datos relacionados'
      default:
        return 'Error desconocido en la base de datos'
    }
  }
  
  return 'Error de conexión con la base de datos'
}
