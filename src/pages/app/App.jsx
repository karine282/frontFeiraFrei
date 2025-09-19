import './App.scss';
import { Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <header className="header">
         <img className='logo' src="/assets/image/FEIRA.png" />
        <h1 className='titulo1'>Feira de Profissões</h1>
        <p className='subtitulo'>Instituto Nossa Senhora de Fátima</p>
        <p className='sub'>Esforço que transforma, e o orgulho que prevalece!</p>
      </header>

<div className='parte'>
  <img className='frei' src="/assets/image/frei.jpg" />
  <div className='botoes-menu'>
    <Link to="/cadastro">
      <button className='botao-menu'>Cadastro</button>
    </Link>
    <Link to="/sobre">
      <button className='botao-menu'>Sobre</button>
    </Link>
    <Link to="/login">
      <button className='botao-menu'>Login</button>
    </Link>
  </div>
</div>


      <div className="aviso">
        Seja bem-vindo(a) 4ª Feira das Profissões do Instituto
      </div>

      <section className="cursos">
        <h2 className="titulo-cursos">Cursos Participantes</h2>
        <div className="cards">
          <div className="cartao">
            <img className="imgs" src="/assets/image/adm.png" alt="Administração" />
            <Link className='pp' to='/cv'>Administração</Link>
          </div>

          <div className="cartao">
            <img className="imgs" src="/assets/image/cv.png" alt="Comunicação Visual" />
          <Link className='pp' to='/cv'>Comunicação Visual</Link>
          </div>

          <div className="cartao">
            <img className="imgs" src="/assets/image/informatica.png" alt="Informática" />
            <Link className='pp' to='/info'>Informática</Link>
          </div>

          <div className="cartao">
            <img className="imgs" src="/assets/image/robotico.png" alt="Automação e Robótica" />
           <Link className='pp' to='/automacao'>Automação e Robótica</Link>
          </div>

          <div className="cartao">
            <img className="imgs" src="/assets/image/auto.png" alt="Eletromecânica de Automóveis" />
           <Link className='pp' to='/eletro'>Eletromecânica de Automóveis</Link>
          </div>

          <div className="cartao">
            <img className="imgs" src="/assets/image/ingles.png" alt="Inglês" />
           <Link className='pp' to='/ingles'>Inglês</Link>
          </div>
          
        </div>
      </section>

 <section className='texto-container'>
      <div className='texto'>
        O Instituto Social Nossa Senhora de Fátima e o Cedesp Ave Maria
        convidam para a 5ª Feira de Profissões, que será realizada SÁBADO, 30 DE
        SETEMBRO, das 9 às 15 HORAS, em sua sede no bairro Veleiros - ZS.
        O evento é uma oportunidade para a família e empresas conhecerem os cursos do
        Instituto, gerando novas parcerias, empregabilidade e inovações.
        A  FEIRA contará com várias atrações, serviços e ações sociais, além 
      de um portfólio de alimentos produzidos pela nossa padaria. 
<br />
<br />
A ONG “Fios de Berenice” (corte de mecha de cabelo para a confecção de 
  perucas para doação), estará presente, assim  como a Universidade Ítalo-Brasileiro,
  STB Intercâmbio, PWI, simulação de entrevista de emprego, teste de co-
  nhecimento de Inglês, obterem informações e curiosidades sobre os cursos do
  instituto e ainda espaço para troca de livros, entre outras coisas.
      </div>
</section>

      <section className="programacao">
          <h2>
          PROGRAMAÇÃO <span className="destaque"> 5ª FEIRA DE PROFISSÕES </span>
        </h2>
        
        <div className="grids">
          <div className="cartãos">
            <h3>PÁTIO</h3>
            <ul>
              <li>Casa da Mulher Paulistana</li>
              <li>Conexão Bem Maior</li>
              <li>Óticas Carol</li>
              <li>STB</li>
            </ul>
          </div>
          <div className="cartãos">
            <h3>2º ANDAR</h3>
            <ul>
              <li>SALA 24 – Comunicação Visual</li>
              <li>SALA 25 – Informática</li>
              <li>SALA 26 – Administração</li>
            </ul>
          </div>
              <div className='cartãos'>
<h3>1° ANDAR</h3>
<ul>
<li>SALA 18 – ADMINISTRAÇÃO: Empreendedorismo e Logística</li>
<li> Sala 19 CREAS</li>
<li> SALA 20 – ADMINISTRAÇÃO: Recursos Humanos, Contabilidade e
Documentos Técnicos</li>
</ul>
</div>
          <div className="cartãos">
            <h3>DEMAIS ESTANTES</h3>
            <ul>
              <li>CEDESP AVE MARIA</li>
              <li>MetalMecânica</li>
              <li>Tecnologia de Redes</li>
              <li>Troca de Livros</li>
              <li>Oficina de Auto Elétrica</li>
            </ul>
          </div>

          <div className='cartãos'>
<h3>3° ANDAR</h3>
<h4>AUDITÓRIO</h4>
<ul>
<li> Simulação de entrevista de emprego</li>
<li> Oficina de Linkedin</li>
</ul>
</div>

<div className='cartãos'>

<h3>SALAS</h3>
<ul>
<li> SALA 4: Óticas Carol</li>
<li> SALA 5: Caixa</li>
<li> SALA 6: Inglês</li>
</ul>
</div>
</div>
</section>




   <footer className="footer">
  <img className="feiraa" src="/assets/image/logo.webp"  />

  <div className='redes'>
    <a href="https://www.instagram.com/institutonsfatima/" target="_blank" rel="noopener noreferrer">
      <img className="ico" src="/assets/image/instagram.png" alt="Instagram" />
    </a>
    <a href="https://www.youtube.com/@institutosocialnossasenhor3548" target="_blank" rel="noopener noreferrer">
      <img className="ico" src="/assets/image/youtube.png" alt="YouTube" />
    </a>
    <a href="https://www.facebook.com/institutonsfatima" target="_blank" rel="noopener noreferrer">
      <img className="ico" src="/assets/image/facebook.png" alt="Facebook" />
    </a>
    <a href="https://br.linkedin.com/in/instituto-nossa-senhora-fátima-a7962b137" target="_blank" rel="noopener noreferrer">
      <img className="ico" src="/assets/image/linkedin.png" alt="LinkedIn" />
    </a>
  </div>

  <div className="info">
    <p>Horário das 9h às 16h</p>
    <p>Av. Coronel Octaviano de Freitas, São Paulo</p>
    <p>Telefone: (11) 5687-8876</p>
  </div>
</footer>



</div>



  );
}
