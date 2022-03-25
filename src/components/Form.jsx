import {useState, useEffect} from 'react';
import Error from './Error';

const Form = ({pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar formulario
    if([nombre, propietario, email, alta, sintomas].includes('')){
      console.log('Hay un campo vacio')
      setError(true)
      return;
    } 
      setError(false)
      //objetos de pacientes
      const objPacientes = {
        nombre, 
        propietario, 
        email, 
        alta, 
        sintomas
      }
      // console.log(obtPacientes)
      setPacientes([...pacientes, objPacientes]);
      //reiniciar el formulario
      setNombre('');
      setPropietario('');
      setEmail('');
      setAlta('');
      setSintomas('');
  }
  

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl py-10 px-5 mb-10">
        { error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label 
            htmlFor="nombre" 
            className="block text-gray-700 uppercase font-bold">
            Nombre Macota
          </label>
          <input 
            id="nombre"
            type="text"  
            placeholder="Nombre de la mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="propietario" 
            className="block text-gray-700 uppercase font-bold">
            Nombre del propietario
          </label>
          <input 
            id="propietario"
            type="text"  
            placeholder="Nombre del propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={propietario}
            onChange={ e => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="email" 
            className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            id="email"
            type="email"  
            placeholder="Email Contacto Propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="alta" 
            className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input 
            id="alta"
            type="date"  
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={alta}
            onChange={ e => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="sintomas" 
            className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ e => setSintomas(e.target.value)}
          />
        </div>
        <input 
          type="submit" 
          value="Agregar paciente" 
          className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
        />
      </form>
    </div>
  )
}

export default Form