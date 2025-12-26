import './tecnologias.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReact } from 'react-icons/si';

function Tecnologias(){
    const tech = [
        { nome: 'HTML5', icon: <FaHtml5 />, classe: 'html', color: '#E34F26' },
        { nome: 'CSS3', icon: <FaCss3Alt />, classe: 'css', color: '#1572B6' },
        { nome: 'JavaScript', icon: <FaJs />, classe: 'js', color: '#F7DF1E' },
        { nome: 'React JS', icon: <FaReact />, classe: 'react', color: '#61DAFB' },
        { nome: 'React Native', icon: <SiReact />, classe: 'react-native', color: '#61DAFB' },
        { nome: 'Git', icon: <FaGitAlt />, classe: 'git', color: '#F05032' },
        { nome: 'Tailwind CSS', icon: <RiTailwindCssFill />, classe: 'git', color: '#00bcff' },
        // Duplicando para criar efeito continuo
        { nome: 'HTML5', icon: <FaHtml5 />, classe: 'html', color: '#E34F26' },
        { nome: 'CSS3', icon: <FaCss3Alt />, classe: 'css', color: '#1572B6' },
        { nome: 'JavaScript', icon: <FaJs />, classe: 'js', color: '#F7DF1E' },
        { nome: 'React JS', icon: <FaReact />, classe: 'react', color: '#61DAFB' },
        { nome: 'React Native', icon: <SiReact />, classe: 'react-native', color: '#61DAFB' },
        { nome: 'Git', icon: <FaGitAlt />, classe: 'git', color: '#F05032' },
        { nome: 'Tailwind CSS', icon: <RiTailwindCssFill />, classe: 'git', color: '#00bcff' },
    ];

    return(
       <section id="tecnologias">
            <div className="tecnologias-container">
                <div className="tecnologias-scroll-container">
                    <div className="tecnologias-scroll">
                        {[...tech, ...tech].map((tech, index) => (
                            <div key={index} className="tecnologia-item">
                                <div className="tecnologia-icon" style={{ color: tech.color }}>
                                    {tech.icon}
                                </div>
                                <span className="tecnologia-nome">{tech.nome}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tecnologias;