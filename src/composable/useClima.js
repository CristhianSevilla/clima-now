export default function useClima() {
  const obtenerClima = ({ ciudad, pais }) => {
    console.log("Consultando el clima de" + ciudad + pais);
  };

  return {
    obtenerClima,
  };
}
