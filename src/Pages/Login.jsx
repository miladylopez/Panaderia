import React from "react";
import FormularioLogin from "../Components/FormularioLogin";
import "../Styles/Login.css";
function Login() {
  return (
    <div>
      <div className="max-w-[785px] min-w-[320px]">
        <div className="main">
          <div className="flex justify-center items-center border-none rounded-md shadow-md">
            <div className="lef-box">
              <h1 className="presentacion text-[36px] font-bold mb-4 text-center">
                Bienvenidos a MiliPan
              </h1>
              <h2 className="presentacion text-center font-bold text-2xl mb-6">
                La mejor panaderia
              </h2>
              <p className="presentacion">NUESTRA RECETA: </p>
              <p className="presentacion">2 kg de abrazos</p>
              <p className="presentacion">3 kg de amor</p>
              <p className="presentacion">4 kg de paciencia</p>
              <p className="presentacion"> 2 litros de sonrisas </p>
              <p className="presentacion">Mezclar todo con cariño
               y servir todos los días.</p>
               
            </div>
          </div>
          <div>
            <FormularioLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;