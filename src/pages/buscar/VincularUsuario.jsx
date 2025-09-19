import { Link } from "react-router-dom";
import { useState } from "react";

export default function VincularUsuario() {
    return (
      <section className="card">
        <h2>vincular usuario</h2>
        <div className="stack">
          <input type="text" placeholder="nome do usuario" />
          <input type="text" placeholder="numero do QR.code" />
        </div>

        <Link to={'/buscar'} > VOLTAR </Link>
      </section>
    );
  }