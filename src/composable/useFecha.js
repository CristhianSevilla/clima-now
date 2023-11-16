export default function useFecha() {
  // Función para obtener el nombre del mes
  function obtenerNombreMes(mes) {
    const nombresMeses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    return nombresMeses[mes];
  }

  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener el día, mes y año
  var dia = fechaActual.getDate();
  var mes = obtenerNombreMes(fechaActual.getMonth());

  // Formatear la fecha en el formato deseado
  var fechaFormateada = `${dia} de ${mes}`;

  // Obtener la fecha y hora actual
  var fechaHoraActual = new Date();

  // Obtener la hora, los minutos y determinar si es am o pm
  var horas = fechaHoraActual.getHours();
  var minutos = fechaHoraActual.getMinutes();
  var amOpm = horas >= 12 ? "pm" : "am";

  // Convertir a formato de 12 horas
  horas = horas % 12 || 12;

  // Formatear la hora en el formato deseado
  var horaFormateada = `${horas}:${minutos < 10 ? "0" : ""}${minutos} ${amOpm}`;

  function formatearHora(tiempoUnix) {
    // Crear un objeto Date con el valor de tiempo
    var fecha = new Date(tiempoUnix * 1000); // Convertir la marca de tiempo a milisegundos

    // Obtener componentes de la fecha (año, mes, día, hora, minuto, segundo)
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();

    // Formatear la fecha y hora
    var fechaFormateada = `${hora}:${minuto}`;

    return fechaFormateada;
  }

  return {
    fechaFormateada,
    horaFormateada,
    formatearHora,
  };
}
