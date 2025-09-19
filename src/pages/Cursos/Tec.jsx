import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './tec.scss';


const data = [
  { id: 1, image: '/assets/image/foto1.jpg' },
  { id: 2, image: '/assets/image/foto2.jpg' },
  { id: 3, image: '/assets/image/foto3.jpg' },
];

export default function Tecnico() {
  return (
    <div className='Container'>
      <h2 className='titulo'>Curso Técnico em Administração</h2>

      <div className="swiper-container-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt={`Slide ${item.id}`} className="slide-item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

  
            <div className='texto'>

                <h3>Modalidades Disponíveis:</h3>
                <p>
                    Concomitante: para estudantes que estão cursando o ensino médio em outra escola.<br />
                    Integrado: ensino médio + técnico na mesma instituição.<br />
                    Subsequente: para quem já concluiu o ensino médio.
                </p>
            </div>
            <div className='texto'>
                <h3>Conteúdo Programático:</h3>
                <p>
                    O curso abrange temas essenciais da área administrativa, como:
                    Gestão de Pessoas<br />
                    Contabilidade Básica<br />
                    Marketing e Vendas<br />
                    Logística<br />
                    Planejamento Empresarial<br />
                    Ética e Cidadania Corporativa
                </p>
            </div>
            <div className='texto'>
                <h3>Estrutura e Diferenciais:</h3>
                <p>
                    Professores experientes e atuantes no mercado.<br />
                    Ambiente acolhedor e voltado à formação integral do aluno.<br />
                    Parcerias com empresas e instituições para estágios supervisionados.<br />
                    Infraestrutura moderna com salas de aula equipadas e laboratório de informática.
                </p>
            </div>
            <Link to="/" className="back">Voltar</Link>

        </div>

    );
}