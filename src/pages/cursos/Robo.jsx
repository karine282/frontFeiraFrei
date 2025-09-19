import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './tec.scss';

export default function Atomocao() {
    return (
        <div className='Container'>
            <h2 className='titulo'>atomação e robotica</h2>

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
                        <img src="/assets/image/foto1.jpg"  className="slide-img" />
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
                <p>
                    <strong>O curso desenvolve habilidades essenciais em automação e robótica, como:</strong><br />
                    Conceitos de sistemas automatizados e industriais<br />
                    Eletrônica básica e sensores<br />
                    Programação de controladores lógicos (CLP)<br />
                    Robótica educacional e aplicada<br />
                    Montagem e manutenção de circuitos automatizados<br />
                    Lógica de programação e algoritmos aplicados à automação<br />
                    Noções de integração com banco de dados e monitoramento de processos<br />
                    Atividades práticas em laboratório e projetos simulados

                </p>

            </div>
            <div className='texto'>
                <h3>Estrutura e Diferenciais:</h3>
                <p>
                    Metodologia prática e aplicada, com foco em projetos reais<br />
                    Professores qualificados e atuantes no mercado<br />
                    Laboratórios equipados com kits de robótica e automação<br />
                    Ambiente acolhedor e adaptado ao ensino noturno<br />
                    Progressão estruturada do nível básico ao pré-avançado
                </p>
            </div>
                <Link to="/" className="back">Voltar</Link>
        </div>

    );
}