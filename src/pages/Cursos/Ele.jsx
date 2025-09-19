import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './tec.scss';
export default function Eletro() {
    return (
        <div className='Container'>
            <h2 className='titulo'>eletromecanica de autos</h2>

            <div className="swiper-container-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    navigation
                    pagination={{ clickable: true }}
                >
                   <SwiperSlide>
                        <img src="/assets/image/foto1.jpg" className="slide-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/image/foto1.jpg"  className="slide-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/image/foto1.jpg" className="slide-img" />
                    </SwiperSlide>
                </Swiper>
                </div>





            <div className='texto'>

                <h3>Modalidades Disponíveis:</h3>
                <p>
                    Básico Noturno: para iniciantes, com aulas de terça a quinta-feira, das 19h às 20h50, carga horária de 240h.<br />
                    Intermediário (Pré-avançado): para quem já concluiu o nível básico, aulas aos sábados, carga horária de 160h.
                </p>
            </div>
            <div className='texto'>
                <h3>Conteúdo Programático:</h3>
                <p> <strong>O curso desenvolve habilidades essenciais em eletromecânica de autos, como: </strong>
                    Conceitos de elétrica e eletrônica automotiva<br />
                    Sistemas de injeção e ignição<br />
                    Diagnóstico e manutenção de motores e transmissões<br />
                    Sistemas de freios, suspensão e direção<br />
                    Baterias, alternadores e sistemas de carga<br />
                    Lógica de programação aplicada a módulos eletrônicos automotivos<br />
                    Atividades práticas em veículos e simuladores
                </p>

            </div>
            <div className='texto'>
                <h3>Estrutura e Diferenciais:</h3>
                <p>
                    Metodologia prática com foco em aplicação real nos veículos<br />
                    Professores qualificados e atuantes no setor automotivo<br />
                    Laboratórios equipados com veículos e kits de prática<br />
                    Ambiente acolhedor e adaptado ao ensino noturno<br />
                    Progressão estruturada do nível básico ao pré-avançado
                </p>
            </div>
            <Link to="/" className="back">Voltar</Link>

        </div>

    );
}