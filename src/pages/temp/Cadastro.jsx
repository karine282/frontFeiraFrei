import React, { useState } from 'react';
import './Cadastro.scss';
import api from "../../api"; 

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [interesse, setInteresse] = useState('');
  const [como_soube, setComo_soube] = useState('');
  const [ja_cursou, setJa_cursou] = useState('');

  const criarCadastro = async (e) => {
    e.preventDefault(); 

    try {
      await api.post('/cadastros', {
        nome,
        cpf,
        email,
        escolaridade,
        interesse,
        como_soube,
        ja_cursou
      });
      alert("Cadastro concluído com sucesso!");
      setNome('');
      setCpf('');
      setEmail('');
      setEscolaridade('');
      setInteresse('');
      setComo_soube('');
      setJa_cursou('');
    } catch (error) {
      alert("Erro ao cadastrar. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="esquerdaa">
        <h2>
          venha visitar nossa <span className="destaque">feira</span>
        </h2>
   
        <img className='predioo' src="/assets/image/predio.png"  />
      </div>

      <div className="direita">
        <img src="/assets/image/logo.webp" alt="logo feira" className="logoo" />
        <h3>cadastre-se</h3>

        <form className="formulario" onSubmit={criarCadastro}>
          <input
            type="text" placeholder="Usuário" value={nome} onChange={(e) => setNome(e.target.value)} required
          />

          <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          
          <select value={escolaridade} onChange={(e) => setEscolaridade(e.target.value)} required>
            <option value="" disabled>Escolaridade</option>
            <option value="Fundamental">Ensino Fundamental</option>
            <option value="Médio">Ensino Médio</option>
            <option value="Técnico">Ensino Técnico</option>
            <option value="Superior">Ensino Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>

        
          <select value={interesse} onChange={(e) => setInteresse(e.target.value)}>
            <option value="" disabled>Interesse em algum Curso?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>

         
          <select value={como_soube} onChange={(e) => setComo_soube(e.target.value)} required>
            <option value="" disabled>Como ficou sabendo da feira?</option>
            <option value="Amigos">Amigos / Família</option>
            <option value="Redes">Redes Sociais</option>
            <option value="Escola">Na Escola</option>
            <option value="Site">Site Oficial</option>
            <option value="Outros">Outros</option>
          </select>

         
          <select value={ja_cursou} onChange={(e) => setJa_cursou(e.target.value)}>
            <option value="" disabled>Já fez curso no instituto?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>

          <button type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
}
