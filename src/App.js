import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";
import Tecnologias from "./sections/Tecnologias";
import Servicos from "./sections/Servicos";
import Contato from "./sections/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Sobre/>
      <Projetos/>
      <Tecnologias/>
      <Servicos/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
