import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import api from '../../api'; 
import { Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function realizarLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email,
        senha
      });

      alert('Login realizado com sucesso!');
      navigate('/buscar'); 
    } catch (err) {
      if (err.response?.data?.erro) {
        alert(err.response.data.erro);
      } else {
        alert('Erro ao tentar fazer login.');
      }
    }
  }

  return (
    <div className="container">
      <div className="esquerd">
        <h2>
        Área <span className="destaque"> Administrativa</span><br />
          
        </h2>
        <img className='pre' src="/assets/image/predio.png" alt="Prédio" />
      </div>

      <div className="direit">
        <img className='logo-feira' src="/assets/image/FEIRA.png" alt="Logo da Feira" />
        <h3>
          Login <span className="destaque">Administrativo</span>
        </h3>

        <form className="formulario-login" onSubmit={realizarLogin}>
          <div className="input-icon">
            <input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-icon">
            <input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

        <Link to='/buscar'> <button type="submit">Entrar</button></Link>
        </form>
      </div>
    </div>
  );
}
