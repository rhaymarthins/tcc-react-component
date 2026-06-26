import type { Setor } from "../data/tipos";

export default function CardSetor({
  nome,
  responsavel,
  manifestacoesAtivas,
  icone,
}: Setor) {
  return (
    <div className="card shadow-sm mb-4 setor-card">
      <div className="card-body text-center">
        <div className="card-icon mb-3">
          <i className={`bi ${icone}`}></i>
        </div>
        <h5 className="card-title fw-bold">{nome}</h5>
        <p className="card-text text-muted mb-2">
          <i className="bi bi-person-fill me-1"></i>
          {responsavel}
        </p>
        <span className="badge bg-primary">
          {manifestacoesAtivas} manifestações ativas
        </span>
      </div>
    </div>
  );
}
