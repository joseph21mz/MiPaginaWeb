// pages/formulario.js
import { useState } from 'react';
import { InsertComment } from '@/controller/controller';


export default function Form() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    await InsertComment(nombre,correo,comentario)
      // Limpiar el formulario después de enviar
      setNombre('');
      setCorreo('');
      setComentario('');
    } catch (err) {
      console.error('Error al guardar los datos en la base de datos', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Correo:
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </label>
      <br />
      <label>
        Comentario:
        <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}



export const __N_SSG = true;