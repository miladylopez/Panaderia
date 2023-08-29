import React from "react";
function FormularioLogin() {
  return (
    <div>
      <div>
        <form className="h-[31.25rem] w-[25rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] flex-1 flex justify-center flex-col items-center bg-[#fefefe] accent-violet-500 select-none shadow-md">
          <h4 className="text-[30px] font-bold tracking-[0.125rem] text-[#766ce7] uppercase">
            Ingresar
          </h4>
          <div className="flex justify-center items-center mb-3 mt-8">
            <input className="inputs" id="user-img" type="text" />
          </div>
          <div className="mb-[1.875rem]">
            <input
              className="h-10 w-[18.625rem] border-none rounded-[1.25rem] bg-[#e8e6ff] px-[3.125rem] flex flex-col justify-center items-center bg-contain bg-no-repeat bg-[0.625rem] outline-none mt-3"
              id="password-img"
              type="password"
            />
          </div>
          <div className="mb-[1.125rem] flex justify-between gap-[0.313rem]">
            <input
              id="checkbox-pointer"
              className="items-center justify-between cursor-pointer"
              type="checkbox"
              name="remember"
              value="remember"
            />
            <label
              className="cursor-pointer text-[0.75rem] text-[#999999] mr-[6.25rem]"
              htmlFor="checkbox-pointer"
            >
              Recordarme
            </label>
            <a
              className="text-[0.75rem] text-[#999999] ml-auto no-underline hover:text-[#5f53e7]"
              href="*"
            >
              ¿Olvidó la contraseña?
            </a>
          </div>
          <div>
            <button className="text-white border-none font-bold tracking-[0.125rem] w-[8.625rem] h-[2.5rem] rounded-[1.25rem] transition-transform duration-200 ease-in bg-gradient-to-r from-[#766ce7] via-[#bf6fb7] to-[#e07c7f] hover:scale-110 hover:brightness-[1.1] hover:shadow-md hover:text-white">
              INGRESAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioLogin;
