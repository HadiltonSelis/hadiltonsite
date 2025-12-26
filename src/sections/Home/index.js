import './home.css';
import { FiChevronDown } from "react-icons/fi";

export default function Home(){
    return(
        <section id="home" className="secao-home" style={{ paddingTop: '80px' }}>
            <div className="home-content">
                <h1 className="texto-apresentacao">OLÁ, SEJA BEM VINDO!</h1>
                <div className="titulo">
                    <h2>Eu sou</h2>
                    <h2 className="nome">Hadilton Selis</h2>
                </div>
                <div className="subtitulo">
                    <h3>DESENVOLVIMENTO WEB E MOBILE | FRONT-END FOCADO EM PERFORMANCE E USABILIDADE | BUSINESS INTELLIGENCE</h3>
                    <p>Do conceito ao código: soluções digitais que conectam pessoas.</p>
                </div>
                <button 
                className="btn-sobre"
                onClick={() => document.getElementById("sobre").scrollIntoView({ behavior: "smooth" })}
                >
                    SOBRE MIM <FiChevronDown color='#fff' size={16} />
                </button>
            </div>
        </section>
    );
}