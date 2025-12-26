import './sobre.css';
import { FiDownload, FiUser, FiAward, FiBriefcase } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";

export default function Sobre(){
    const handleAbrirCurriculo = () => {
        const urlCurriculo = "/Hadilton-CV-DEV.pdf";
        window.open(urlCurriculo, "_blank");
    };

    return(
        <section id="sobre" className="secao-sobre">
            <div className="container">
                <h2 className="titulo-secao">SOBRE MIM</h2>

                <div className="sobre-content">
                    <div className="sobre-info">
                        <div className="cabecalho-info">
                            <FiUser className="icone-titulo" />
                            <h3>Quem sou eu</h3>
                        </div>
                        <p>
                            Sou um desenvolvedor Front-End em formação, com foco na criação de interfaces modernas, responsivas e 
                            funcionais. Possuo forte base em tecnologia, raciocínio lógico e organização de processos, construída a 
                            partir da minha formação técnica e experiências profissionais anteriores.
                        </p>
                        <p>
                            Atualmente, direciono meus estudos e projetos pessoais para o desenvolvimento web, aplicando conceitos 
                            de HTML, CSS, JavaScript e frameworks modernos, sempre buscando escrever código limpo, reutilizável e 
                            orientado à melhor experiência do usuário.
                        </p>
                        <p>
                            Além da área de desenvolvimento, sou pós-graduado em Business Intelligence, com experiência prática em 
                            projetos de análise financeira, criação de relatórios, organização de dados e apoio à tomada de decisão. 
                            Esse background me permite desenvolver soluções que não apenas funcionam bem visualmente, mas que 
                            também fazem sentido do ponto de vista analítico e de negócio.
                        </p>
                        <p>
                            Minha transição para a área de desenvolvimento é guiada pela prática constante, aprendizado contínuo e 
                            construção de projetos próprios, que refletem minha evolução técnica e meu compromisso em crescer 
                            profissionalmente na área de tecnologia, com objetivo futuro de atuar como desenvolvedor Full Stack, 
                            unindo desenvolvimento, dados e visão estratégica. 
                        </p>

                        <div className="detalhes-pessoais">
                            <div className="detalhes-item">
                                <FiAward className="icone-detalhe" />
                                <div>
                                    <strong>Formação:</strong> Tecnologia em Redes de Computadores
                                </div>
                            </div>
                            <div className="detalhes-item">
                                <FiBriefcase className="icone-detalhe" />
                                <div>
                                    <strong>Interesses:</strong> Desenvolvimento Web e Mobile, automação
                                </div>
                            </div>
                        </div>

                        <button className="botao-curriculo" onClick={handleAbrirCurriculo}>
                            <FiDownload className="icone-botao" />
                            Baixar Currículo
                        </button>
                    </div>

                    <div className="sobre-experiencia">
                        <div className="cabecalho-experiencia">
                            <BsBoxSeam className="icone-titulo" />
                            <h3>Projetos & Experiência Prática</h3>
                        </div>

                        <div className="experiencia-item">
                            <div className="cabecalho-experiencia-item">
                                <h4>Blog Pessoal</h4>
                                <span className="periodo">Front-End</span>
                            </div>
                            <span className="companhia">Descrição</span>
                            <p className='descricao'>
                                Desenvolvimento de um blog responsivo focado em organização de conteúdo e boa experiência de leitura. 
                                O projeto foi criado para aplicar conceitos de layout, componentização e navegação, priorizando 
                                usabilidade e performance.
                            </p>
                            <ul>
                                <li>Responsável pelo setor de peças</li>
                                <li>Entrada e saídas de peças</li>
                                <li>Atendimento ao cliente</li>
                                <li>Responsável pelo inventário do setor</li>
                            </ul>
                        </div>

                        <div className="experiencia-item">
                            <div className="cabecalho-experiencia-item">
                                <h4>Sistema de Agendamento</h4>
                                <span className="periodo">Front-End</span>
                            </div>
                            <span className="companhia">Descrição</span>
                            <p className='descricao'>
                                Sistema web para gerenciamento de agendamentos, desenvolvido com foco em organização, fluxo de 
                                informações e experiência do usuário.
                            </p>
                            <ul>
                                <li>Interface para criação e visualização de agendamentos</li>
                                <li>Organização de horários e informações do usuário</li>
                                <li>Layout responsivo e intuitivo</li>
                                <li>ReactJS, CSS3</li>
                            </ul>
                        </div>

                        <div className="experiencia-item">
                            <div className="cabecalho-experiencia-item">
                                <h4>Controle Financeiro em Excel</h4>
                                <span className="periodo">Business Intelligence</span>
                            </div>
                            <span className="companhia">Descrição</span>
                            <p className='descricao'>
                               Planilha avançada de controle financeiro desenvolvida para organizar receitas, despesas e indicadores, 
                               aplicada em cenários reais de análise financeira.
                            </p>
                            <ul>
                                <li>Estrutura completa de controle financeiro</li>
                                <li>Organização de dados por categorias e períodos</li>
                                <li>Cálculo automático de saldos e indicadores (Contas a pagar e receber, Fluxo de caixa, DRE)</li>
                                <li>Dashboards e visualização clara de informações</li>
                                <li>Excel, Análise Financeira, Business Intelligence</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}