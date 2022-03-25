import Pacientes from './Pacientes';

const ListadoPacientes = ({pacientes}) => {
  console.log(pacientes)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-scroll">
      <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {pacientes.map( (paciente) => (
        <Pacientes 
          paciente={paciente}
        />
      ))}
      
    
    </div>

  )
}

export default ListadoPacientes;