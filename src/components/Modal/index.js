import { useState } from "react";
import "./modal.css";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ModalProjetos({ isOpen, onClose, projeto }) {
  const [imagemPrincipalIndex, setImagemPrincipalIndex] = useState(0);

  // Se não tiver projeto ou modal não estiver aberto → não renderiza nada
  if (!isOpen || !projeto) return null;

  // Garantindo que as imagens sejam um array
  const imagens = Array.isArray(projeto.img) ? projeto.img : [projeto.img || ""];

  function selecionarImagem(index) {
    setImagemPrincipalIndex(index);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-header">
          <h2>{projeto.titulo}</h2>

          {imagens.length > 0 && imagens[0] && (
            <div className="modal-main-image">
              <img
                src={imagens[imagemPrincipalIndex]}
                alt={`${projeto.titulo} - Visualização ${imagemPrincipalIndex + 1}`}
              />
            </div>
          )}

          {imagens.length > 1 && (
            <div className="modal-miniatura">
              {imagens.map((imagem, index) => (
                <div
                  key={index}
                  className={`miniatura ${index === imagemPrincipalIndex ? "active" : ""}`}
                  onClick={() => selecionarImagem(index)}
                >
                  <img
                    src={imagem}
                    alt={`${projeto.titulo} - Miniatura ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="modal-info">
            <div className="descricao-modal">
              <p>{projeto.descricao}</p>
            </div>

            <div className="modal-detalhes">
              <div className="modal-tech">
                {(projeto.tecnologias || ["ReactJS", "CSS3", "JavaScript", "TailwindCSS"]).map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="modal-links">
                <a
                  href={projeto.linkProjeto || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Ver Projeto Online
                </a>
                <a
                  href={projeto.linkCodigo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Ver Código Fonte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
