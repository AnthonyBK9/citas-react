const Pacientes = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
            Propietario {''}
            <span className="font-normal normal-case">Antonio</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal normal-case">antonio@gmail.com</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
            Fecha de alta: {''}
            <span className="font-normal normal-case">24/03/2022</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case">Come nepes</span>
        </p>
      </div>
  )
}

export default Pacientes