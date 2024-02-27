import { createContext } from "react";
const FormularioContext = createContext({
  datosFormulario: {
    nombre: "",
    correo: "",
    mensaje: "",
    numberCar: "",
  },
  actualizarNombre: () => {},
  actualizarCorreo: () => {},
  actualizarMensaje: () => {},
  updateNumberCar: () => {},
});

export default FormularioContext;
