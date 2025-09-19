import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './tec.scss';

export default function CV() {
    return (
        <div className='Container'>
            <h2 className='titulo'>Curso Técnico em Comunicação Visual</h2>

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
                        <img src="/assets/image/foto2.jpg" className="slide-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/image/imagen3.png"  className="slide-img" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='texto'>
                <h3>Modalidades Disponíveis:</h3>
                <p>
                    Integrado: ensino médio + técnico em Comunicação Visual na mesma instituição.<br />
                    Subsequente: para quem já concluiu o ensino médio. (Disponível apenas como técnico presencial no instituto)
                </p>
            </div>

            <div className='texto'>
                <h3>Conteúdo Programático:</h3>
                <p>
                    O curso prepara o aluno para atuar na área de comunicação visual, abordando temas como:<br />
                    Desenvolvimento de peças gráficas, publicitárias e design para mídias digitais<br />
                    Editoração e diagramação (livros, jornais, panfletos)<br />
                    Tratamento de imagens e fotografia<br />
                    Gestão de redes sociais, marketing digital e e-commerce
                </p>
            </div>

            <div className='texto'>
                <h3>Estrutura e Diferenciais:</h3>
                <p>
                    Perfil profissional amplo, incluindo: marketing, design gráfico, redes sociais e editoração.<br />
                    Diploma/Técnico oferece:<br />
                    Certificação técnica em Administração (para alunos do 1º ou 2º ano do Ensino Médio)<br />
                    Diploma de Técnico em Comunicação Visual (para quem está no 3º ano ou já concluiu o Ensino Médio)
                </p>
            </div>

            <Link to="/" className="back">Voltar</Link>
        </div>
    );
}
