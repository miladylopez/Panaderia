import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const ListaDePanes =() => {
    const token = localStorage.getItem("token");
    const [data, setData]= useState([]);  

    const llamarListaPanes= async()=>{
      await axios
        .get("http://89.116.25.43:3500/api/productos/listar ",{
          headers: {Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          console.log(resp);
          setData(resp.data.result);
        })
        .catch((error) => {
          console.log(error);
          if(error.response.status === 400){
            Swal.fire("Información!", error.response.data.message, "error");
          } else if(error.response.status===401){
            Swal.fire("Información!", error.response.data.message, "error");
          } else{
            Swal.fire("Información!", "Ocurrio un error!", "error");
          }
    
        });
    };

    useEffect(() => {
      llamarListaPanes();
    }, []);

  return (
    <div className='FondoPag'>
      {data.map((result) => {
        return(
          <div key={result._id}
          className='Grid'>
          <div>{result.descripcion}</div>
          <div>
            <img src={result.imagen} alt={result.descripcion} />
          </div>
          <div className='Producto'>{"$"+result.valor}</div>
        </div>
        )
      })}
    </div>
  );
};

export default ListaDePanes;
