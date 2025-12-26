import './servicos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdWorkOutline, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";


const ServicoCard = ({ icone: Icone, titulo, descricao }) => {
  return (
    <div className='card-servico'>
      <div className='icone-servico' aria-hidden="true">
        <Icone />
      </div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
};

export default function Servicos() {
  const servicos = [
    {
      icone: FiSmartphone,
      titulo: "Desenvolvimento Mobile",
      descricao: "Criação de aplicativos nativos e híbridos para iOS e Android"
    },
    {
      icone: HiOutlineDesktopComputer,
      titulo: "Desenvolvimento Web",
      descricao: "Desenvolvimento de sites responsivos e aplicações web modernas"
    },
    {
      icone: MdWorkOutline,
      titulo: "Análise de Dados & Business Intelligence",
      descricao: "Análise e visualização de dados para apoiar decisões estratégicas, transformando dados brutos em insights claros e acionáveis."
    },
    {
      icone: MdWorkOutline,
      titulo: "Consultoria em TI",
      descricao: "Soluções personalizadas para otimizar seus processos tecnológicos"
    },
  ];

  return (
    <section id="servicos" className="secao-servicos" aria-labelledby='servicos-heading'>
      <div className="container-servicos">
        <h2 className="titulo-secao" id='servicos-heading'>SERVIÇOS</h2>
        <p className="subtitulo-secao">O que eu posso fazer por você?</p>
        <p className="texto-servicos">
          Estes são alguns trabalhos em que posso utilizar minhas habilidades para gerar soluções eficientes e eficazes em problemas que você possa enfrentar.
        </p>

        <div className="swiper-container-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination',
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3, spaceBetween: 30 }
            }}
            className='servicos-swiper'
          >
            {servicos.map((servico, index) => (
              <SwiperSlide key={index}>
                <ServicoCard 
                  icone={servico.icone}
                  titulo={servico.titulo}
                  descricao={servico.descricao}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-button-prev">
            <MdOutlineKeyboardArrowLeft size={28} />
          </div>
          <div className="custom-swiper-button-next">
            <MdOutlineKeyboardArrowRight size={28} />
          </div>
        </div>

        <div className="custom-swiper-pagination"></div>
      </div>
    </section>
  );
}