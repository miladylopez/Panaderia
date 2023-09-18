import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonLogin from "./buttonLogin";
import Swal from "sweetalert2";


function FormularioLogin()  {
  const [usuario, setUsuario] = useState("");
  const [password,  setPasword] = useState("");
  const navigate = useNavigate()
  const IrAlRegistro = () =>{
    navigate("/register")
  }
  const inicioSesion = async (e) => {
    e.preventDefault()
    console.log(":", usuario)
    console.log("Password: ", password)

    const data= {
      usuario: usuario,
      password: password,
    };

    // Consumo de servicio logion
    await axios
    .post("http://89.116.25.43:3500/api/login", data)
    .then((resp) => {
      console.log(resp);
      localStorage.setItem("token", resp.data.jwt);
      localStorage.setItem("user", resp.data.user);
      localStorage.setItem("username", resp.data.user.usuario);
      navigate("/dashboard");
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status === 404){
        Swal.fire("Informacion", error.response.data.message, "error")
      } else{
        Swal.fire("Informacion", "ocurrio un error", "error")
      }
    });
  }

  return (
    <div>
      <div>
        <form className="h-[31.25rem] w-[25rem] rounded-tr-md rounded-br-md flex-1 flex justify-center flex-col items-center bg-amber-700  select-none shadow-md">
          <h4 className="text-[30px] font-bold text-[#ffe4c4] uppercase">
            Login
          </h4>
          <div className="flex justify-center items-center mb-3 mt-8">
            <input
              className="inputs"
              type="email"
              placeholder="Ingresa tu usuario"
              onChange={(e) => {
                setUsuario(e.target.value)
              }}
            />
          </div>
          <div className="mb-[1.875rem]">
            <input
              className="inputs"
              type="password"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => {
                setPasword(e.target.value)
              }}
            />
          </div>
          <div>
            <ButtonLogin fnInicioSesion={inicioSesion} label="Suscribe"/>
          </div>
        </form>
      </div>
    </div>
    );
};

export default FormularioLogin;
