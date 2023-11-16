export default function useFecha() {
  function obtenerFechaActual() {
    const opcionesFecha = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const fechaActual = new Date();
    const fechaFormateada = new Intl.DateTimeFormat(
      "es-ES",
      opcionesFecha
    ).format(fechaActual);

    return fechaFormateada;
  }

  function formatearHoraDesdeUnix(tiempoUnix) {
    const fecha = new Date(tiempoUnix * 1000); // Multiplicar por 1000 para convertir segundos a milisegundos

    const opcionesHora = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true, // Utilizar el formato de 12 horas (true) o 24 horas (false)
    };

    const horaFormateada = new Intl.DateTimeFormat(
      "en-US",
      opcionesHora
    ).format(fecha);

    return horaFormateada;
  }

  return {
    obtenerFechaActual,
    formatearHoraDesdeUnix,
  };
}
