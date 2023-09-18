import React from 'react'

const ButtonLogin = ({fnInicioSesion, label }) => {
  return (
    <button
        onClick={fnInicioSesion}
        className="text-amber-700 border-none font-bold w-[8.625rem] h-[2.5rem] rounded-md transition-transform duration-200 ease-in bg-[#ffe4c4] hover:brightness-[1.1] hover:shadow-md hover:text-amber-950"
        >
        {label}
    </button>
  );
};

export default ButtonLogin
