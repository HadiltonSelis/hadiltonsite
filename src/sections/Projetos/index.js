import { useState } from 'react';
import ModalProjetos from '../../components/Modal';
import './projetos.css';
import P1 from '../../assets/projeto1hero.png';
import P2 from '../../assets/projeto1sobserv.png';
import P3 from '../../assets/projeto1clientcontact.png';
import Projeto2 from '../../assets/Projeto2_home.png';
import Projeto2A from '../../assets/Projeto2_dashboard.png';
import Projeto2B from '../../assets/Projeto2_newpost.png';
import Projeto2C from '../../assets/Projeto2_login.png';
import Projeto2D from '../../assets/Projeto2_painCat.png';
import Projeto3 from '../../assets/Projeto3_home.png';
import Projeto3A from '../../assets/Projeto3_menu.png';
import Projeto3B from '../../assets/Projeto3_clientes.png';
import Projeto4 from '../../assets/contas-pagar.png';
import Projeto4A from '../../assets/contas-receber.png';
import Projeto4B from '../../assets/fluxo-caixa.png';
import Projeto4C from '../../assets/dre-simplificado.png';
import Projeto4D from '../../assets/Dashboard.png';

function Projetos() {
  const [modalAberto, setModalAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const projetos = [
    {
      id: 1,
      titulo: "Landing Page para gestor Financeiro",
      descricao: "Landing page feita em ReactJS para apresentar os serviços de um gestor financeiro. Design moderno e responsivo, focado em conversão de visitantes em clientes.",
      img: [P1, P2, P3],
      miniatura: P1,
      tecnologias: ["ReactJS", "CSS3"],
      linkProjeto: "#",
      linkCodigo: "#"
    },
    {
      id: 2,
      titulo: "Blog DEVCEO",
      descricao: "Uma plataforma moderna de blog construída com React, Vite, TailwindCSS e Firebase. Inclui painel administrativo completo para gerenciar posts, categorias, configurações e autenticação. É um Blog com um espaço criado para compartilhar conhecimento, inovação e tendências que estão moldando o futuro da tecnologia, negócios e transformação digital.",
      img: [Projeto2, Projeto2C, Projeto2A, Projeto2B, Projeto2D],
      miniatura: Projeto2,
      tecnologias: ["ReactJS", "TailwindCSS", "Firebase"],
      linkProjeto: "https://blogdevceo.vercel.app/",
      linkCodigo: "https://github.com/HadiltonSelis?tab=repositories"
    },
    {
      id: 3,
      titulo: "HairDay - Agendamentos",
      descricao: "Sistema de agendamento e gestão de clientes para salões de beleza e barbearias. Construída com React, Vite, CSS3. (Em desenvolvimento)",
      img: [Projeto3, Projeto3A, Projeto3B],
      miniatura: Projeto3,
      tecnologias: ["ReactJS", "CSS3"],
      linkProjeto: "https://github.com/HadiltonSelis/HairDay",
      linkCodigo: "https://github.com/HadiltonSelis/HairDay"
    },
    {
      id: 4,
      titulo: "Sistema de Gerenciamento Financeiro - Excel",
      descricao: "Planilhas avançadas em Excel para controle financeiro pessoal e empresarial, com gráficos dinâmicos e análises detalhadas. Em breve será um sistema web.",
      img: [Projeto4, Projeto4A, Projeto4B, Projeto4C, Projeto4D],
      miniatura: Projeto4,
      tecnologias: ["Excel"],
      linkProjeto: "https://github.com/HadiltonSelis/sistema-financeiro-empresarial-excel",
      linkCodigo: "https://github.com/HadiltonSelis/sistema-financeiro-empresarial-excel"
    },
  ];

  function abrirModal(projeto) {
    setProjetoSelecionado(projeto);
    setModalAberto(true);
  }

  function fecharModal() {
    setProjetoSelecionado(null);
    setModalAberto(false);
  }

  return (
    <section id="projetos" className="secao-projetos">
      <div className="container">
        <h2 className="titulo-projetos">MEUS PROJETOS</h2>
        <p className="texto-titulo">
          Agora que já sabe um pouco sobre mim, gostaria de apresentar alguns dos projetos nos quais trabalhei.
        </p>

        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="projeto-card">
              <img
                src={projeto.miniatura}
                alt={projeto.titulo}
                onClick={() => abrirModal(projeto)}
                style={{ cursor: "pointer" }}
              />
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>

              <div className="card-btn">
                <button onClick={() => abrirModal(projeto)}>Ver Projeto</button>
                <a
                  href={projeto.linkCodigo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalProjetos
        isOpen={modalAberto}
        onClose={fecharModal}
        projeto={projetoSelecionado}
      />
    </section>
  );
}

export default Projetos;
