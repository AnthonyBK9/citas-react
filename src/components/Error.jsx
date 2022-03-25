const Error = ( {mensaje} ) => {
  return (
    <div className="bg-red-500 text-white font-bold py-2 px-1 text-center rounded-xl mb-3 uppercase">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error