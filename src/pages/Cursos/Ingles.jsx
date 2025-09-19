import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './tec.scss';

export default function Ingles() {
    return (
        <div className='Container'>
            <h2 className='titulo'>Curso de inglês</h2>

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
                        <img src="/assets/image/foto3.png" className="slide-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/image/foto3.png" className="slide-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/image/foto3.png" className="slide-img" />
                    </SwiperSlide>
                </Swiper>
                </div>

            <div className='texto'>
                <h3>Modalidades Disponíveis:</h3>
                <p>
                    Básico Noturno: para iniciantes, com aulas de terça a quinta-feira, das 19h às 20h50 (240h).<br />
                    Intermediário (Pré-avançado): para quem já concluiu o básico, com aulas aos sábados (160h).
                </p>
            </div>
            <div className='texto'>
                <h3>Conteúdo Programático:</h3>
                <p>
                    <strong>  O curso desenvolve as quatro habilidades da língua inglesa:</strong> <br />
                    Conversação (Speaking)<br />
                    Escrita (Writing)<br />
                    Leitura (Reading)<br />
                    Compreensão auditiva (Listening) Inclui vocabulário, gramática e atividades práticas, <br />
                    utilizando materiais da Cambridge University Press e workbooks próprios.
                </p>

            </div>
            <div className='texto'>
                <h3>Estrutura e Diferenciais:</h3>
                <p>
                    Metodologia comunicativa focada no uso prático do inglês.<br />
                    Professores qualificados e com experiência na área.<br />
                    Material didático reconhecido internacionalmente.<br />
                    Ambiente acolhedor e adaptado para o aprendizado noturno.<br />
                    Progressão estruturada do nível básico ao pré-avançado.
                </p>
            </div>
            <Link to="/" className="back">Voltar</Link>

        </div>

    );
}