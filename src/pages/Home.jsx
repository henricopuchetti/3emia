import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";
import "../Super.css";
import Rodape from "../components/Rodape";




function Home() {
  return (
    <div>
        <NavProjeto />
        <Carrossel />
        <br />
        <h1 className="titulo">Produtos</h1>
        <br />
        <Cards />
        <br />
        <Rodape />

        
    </div>
  )
      
}


export default Home
