import './footer.css';
import { FaInstagram, FaGithub, FaLinkedin, FiHeart } from 'react-icons/fa';
import { FiArrowUp, FiMail } from 'react-icons/fi';

export default function Footer(){
    const iraoTopo = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <FaInstagram/>,
            url: "https://www.instagram.com/hadiltonselis/",
            label: "Instagram",
            color: "#e4405f"
        },
        {
            icon: <FaGithub/>,
            url: "https://github.com/HadiltonSelis",
            label: "GitHub",
            color: "#333"
        },
        {
            icon: <FaLinkedin/>,
            url: "https://www.linkedin.com/in/hadiltonsilva/",
            label: "LinkedIn",
            color: "#0077b5"
        },
    ];

    const quickLinks = [
        { name: "Início", href: "#home"},
        { name: "Sobre", href: "#sobre"},
        { name: "Serviços", href: "#servicos"},
        { name: "Projetos", href: "#projetos"},
        { name: "Contato", href: "#contato"},
    ];

    return(
        <footer className='footer'>
            <button className='irtopo' onClick={iraoTopo} aria-label="Voltar ao topo">
                <FiArrowUp />
            </button>

            <div className='footer-content'>
                <div className='footer-main'>
                    <div className='footer-section'>
                        <h3 className='footer-logo'>Hadilton Selis</h3>
                        <p className='descricao-footer'>
                            Desenvolvedor Front-End especializado em criar soluções digitatis
                            inovadoras e eficientes para impulsionar seu negócio.
                        </p>
                        <div className='social-links'>
                            {socialLinks.map((social, index) => (
                                <a  
                                    key={index}
                                    href={social.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='social-link'
                                    aria-label={social.label}
                                    style={{ '--hover-color': social.color }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='footer-section'>
                        <h4>Links Rápidos</h4>
                        <ul className='footer-links'>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className='footer-link'>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='footer-section'>
                        <h4>Contato</h4>
                        <div className='contato-info'>
                            <div className='contato-item'>
                                <FiMail className='contato-icon'/>
                                <span>hadiltonsilva@gmail.com</span>
                            </div>
                            
                        </div>
                    </div>
                
                </div>
            
                <div className='footer-divider'></div>

                <div className='footer-bottom'>
                    <div className='footer-copyright'>
                        <p>
                            © {currentYear} Hadilton Silva. Todos os direitos reservados.
                            Feito por Hadilton Selis.
                        </p>
                    </div>

                </div>


            
            </div>
        </footer>
    );
}