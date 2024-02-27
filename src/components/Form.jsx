// import { useState } from "react";
// export default function Form() {
//   const [input, setInput] = useState("");
//   const handelChange = (e) => {
//     setInput(e.target.value);
//   };
//   return (
//     <form>
//       <h1>{input}</h1>
//       <input type="text" onChange={handelChange} />

//     </form>
//   );
// }

import Formulario from "./Formulario.jsx";
import FormularioProvider from "./FormularioProvider.jsx";

export default function Form() {
  return (
    <FormularioProvider>
      <Formulario />
    </FormularioProvider>
  );
}
