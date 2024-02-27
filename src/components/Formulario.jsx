import { useContext, useState } from "react";
import FormularioContext from "./formularioContext.js";
export default function Formulario() {
  const {
    datosFormulario,
    actualizarNombre,
    actualizarCorreo,
    actualizarMensaje,
    updateNumberCar,
  } = useContext(FormularioContext);
  const { onlyNumber, setOnlyNumber } = useState(false);

  const handleChangeNombre = (e) => {
    actualizarNombre(e.target.value);
  };

  const handleChangeCorreo = (e) => {
    actualizarCorreo(e.target.value);
  };

  const handleChangeMensaje = (e) => {
    actualizarMensaje(e.target.value);
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { nombre, correo, mensaje } = e.target;
    console.log(nombre.value, correo.value, mensaje.value);
    actualizarCorreo("");
    actualizarMensaje("");
    actualizarNombre("");
  };
  const handelNumberCar = (e) => {
    const value = e.target.value
      .replace(/\s/g, "")
      .replace(/\D/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();

    updateNumberCar(value);
  };

  return (
    <form onSubmit={handelsubmit}>
      <ul>
        <li>{datosFormulario.nombre}</li>
        <li>{datosFormulario.correo}</li>
        <li>{datosFormulario.mensaje}</li>
        <li>
          {datosFormulario.numberCar
            ? datosFormulario.numberCar
            : "0000 0000 0000 0000"}
        </li>
      </ul>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={datosFormulario.nombre}
        onChange={handleChangeNombre}
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={datosFormulario.correo}
        onChange={handleChangeCorreo}
      />
      <textarea
        name="mensaje"
        placeholder="Mensaje.."
        value={datosFormulario.mensaje}
        onChange={handleChangeMensaje}
      />
      <input
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        value={datosFormulario.numberCar}
        onChange={handelNumberCar}
        className={!onlyNumber ? "" : "border bg-slate-500 mt-0 border-slate-900 p-3"}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
