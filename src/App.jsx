import { useState } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-5">
      <Header 
        
      />
      <div className="md:flex mt-12">
        <Form 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
        
        />
      </div>  
    </div>
  )
}

export default App
