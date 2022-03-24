import Header from "./components/Header"
import Form from "./components/Form"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="md:flex mt-12">
        <Form />
        <ListadoPacientes />
      </div>  
    </div>
  )
}

export default App
