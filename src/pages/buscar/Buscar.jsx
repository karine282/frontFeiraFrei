import { useState } from "react";
import { Link } from "react-router-dom";
import './buscar.scss';
import api from "../../api";

export default function BuscarVisitante() {
  const [busca, setBusca] = useState("");
  const [visitante, setVisitante] = useState(null);
  const [msg, setMsg] = useState("");

  const buscarVisitante = async () => {
    setMsg("");
    setVisitante(null);

    if (!busca.trim()) {
      setMsg("Digite um e-mail para buscar.");
      return;
    }

    try {
      const response = await api.get("/cadastros/filtro/email", {
        params: { email: busca }
      });

      if (response.data && response.data.length > 0) {
        setVisitante(response.data[0]);
        setMsg("");
      } else {
        setMsg("Visitante não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar visitante:", error);
      setMsg("Erro ao buscar visitante.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarVisitante();
  };

  return (
    <section className="card">
      <h2>buscar visitante</h2>

      <form onSubmit={handleSubmit} className="search-row">
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="digite seu email"
          onKeyDown={(e) => {
            if (e.key === "Enter") buscarVisitante();
          }}
        />
        <button className="btn" type="submit">ir</button>
      </form>

      {msg && <div className="msg">{msg}</div>}

      {visitante && (
        <div className="grid">
          <div className="label">nome</div>
          <input
            className="line-input"
            type="text"
            value={visitante.nome}
            readOnly
          />

          <div className="label">CPF</div>
          <input
            className="line-input"
            type="text"
            value={visitante.cpf}
            readOnly
          />

          <div className="label">Email</div>
          <input
            className="line-input"
            type="text"
            value={visitante.email}
            readOnly
          />
        </div>
      )}

      <Link to="/vincular">Ir</Link>

      <div className="esquerda">
        <h2>
          venha visitar nossa <span className="destaque">feira</span>
        </h2>
        <img className='predio' src="/assets/image/predio.png" alt="Prédio" />
      </div>
    </section>
  );
}
