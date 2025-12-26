import { useState, useRef } from "react";
import './contato.css';
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LiaBell } from "react-icons/lia";

export default function Contato(){
    const [formData, setFormData] = useState({
        nome: "",
        contato: "",
        mensagem: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const telefone = "5577999119437";
        const mensagemFormatada = `Olá, meu nome é ${formData.nome}. Mensagem: ${formData.mensagem}`;
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagemFormatada)}`;

        window.open(url, "_blank");

        setFormData({
            nome: "",
            contato: "",
            mensagem: "",
        });
        setIsSubmitting(false);
    };

    const socialLinks = [
        { icon: <FaInstagram />, url: "https://www.instagram.com/hadiltonselis/", label: "Instagram"},
        { icon: <FaGithub />, url: "https://github.com/HadiltonSelis", label: "GitHub" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/hadiltonsilva/", label: "LinkedIn" }
    ];

    return(
        <section id="contato" className="secao-contato">
            <div className="container-contato">
                <div className="contato-header">
                    <h2 className="titulo-contato">Vamos Trabalhar Juntos?</h2>
                    <p className="subtitulo-contato">Entre em contato e vamos conversar sobre como posso ajuda-lo</p>
                </div>

                <div className="contato-content">
                    <div className="info-contato">
                        <div className="info-card">
                            <h3>Informações para Contato</h3>
                            <div className="info-item">
                                <div className="info-icon">
                                    <FiMail />
                                </div>
                                <div className="info-text">
                                    <span>Email</span>
                                    <p>hadiltonsilva@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FiMapPin />
                                </div>
                                <div className="info-text">
                                    <span>Localização</span>
                                    <p>Luís Eduardo Magalhães, Bahia, Brasil</p>
                                </div>
                            </div>

                            <div className="social-section">
                                <h4>Me siga nas redes</h4>
                                <div className="social-icons">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="social-link"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="form-contato" onSubmit={handleSubmit} ref={formRef} noValidate>
                        <h3>Envie uma mensagem</h3>

                        <div className="input-group">
                            <input
                                type="text"
                                name="nome"
                                placeholder=" "
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                            <label className="form-label">Seu nome completo</label>
                        </div>

                        <div className="input-group">
                            <textarea
                                name="mensagem"
                                placeholder=" "
                                value={formData.mensagem}
                                onChange={handleChange}
                                required
                                className="form-textarea"
                                rows="4"
                            />
                            <label className="form-label">Sua mensagem</label>
                        </div>

                        <button
                            type="submit"
                            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span key="loading" className="button-content">
                                <div className="spinner"></div>
                                Enviando...
                                </span>
                            ) : (
                                <span key="default" className="button-content">
                                <FiSend />
                                Enviar Mensagem
                                </span>
                            )}
                        </button>
                    </form>
                </div>


                
            </div>
        </section>
    );

}