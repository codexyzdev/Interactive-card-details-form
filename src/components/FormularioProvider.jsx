import FormularioContext from "./formularioContext.js";
import { useState } from "react";

export default function FormularioProvider({ children }) {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
    numberCar: "",
  });

  const actualizarNombre = (nombre) => {
    setDatosFormulario((prevDatos) => ({ ...prevDatos, nombre }));
  };

  const actualizarCorreo = (correo) => {
    setDatosFormulario((prevDatos) => ({ ...prevDatos, correo }));
  };

  const actualizarMensaje = (mensaje) => {
    setDatosFormulario((prevDatos) => ({ ...prevDatos, mensaje }));
  };
  const updateNumberCar = (numberCar) => {
    setDatosFormulario((prevDatos) => ({ ...prevDatos, numberCar }));
  };

  return (
    <FormularioContext.Provider
      value={{
        datosFormulario,
        actualizarNombre,
        actualizarCorreo,
        actualizarMensaje,
        updateNumberCar,
      }}
    >
      {children}
    </FormularioContext.Provider>
  );
}
