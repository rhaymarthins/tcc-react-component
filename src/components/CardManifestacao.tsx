interface Props {
  tipo: "Reclamação" | "Sugestão" | "Elogio" | "Denúncia";
  status: "Pendente" | "Em andamento" | "Resolvido";
  descricao: string;
  dataAbertura: string;
  protocolo: string;
  destacado?: boolean;
}

function obterCorStatus(status: Props["status"]): string {
  if (status === "Pendente") return "warning";
  if (status === "Em andamento") return "primary";
  return "success";
}

function obterCorTipo(tipo: Props["tipo"]): string {
  if (tipo === "Reclamação") return "danger";
  if (tipo === "Denúncia") return "dark";
  if (tipo === "Sugestão") return "info";
  return "success";
}

export default function CardManifestacao({
  tipo,
  status,
  descricao,
  dataAbertura,
  protocolo,
  destacado = false,
}: Props) {
  return (
    <div
      className={`card shadow-sm mb-4 ${destacado ? "border-primary border-2" : ""}`}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className={`badge bg-${obterCorTipo(tipo)}`}>{tipo}</span>
          <span className={`badge bg-${obterCorStatus(status)}`}>{status}</span>
        </div>

        <p className="card-text text-muted mb-3">{descricao}</p>

        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            <i className="bi bi-calendar3 me-1"></i>
            {dataAbertura}
          </small>
          <small className="text-muted">
            <i className="bi bi-hash me-1"></i>
            {protocolo}
          </small>
        </div>

        {destacado && (
          <div className="alert alert-primary mt-3 mb-0 py-2 px-3">
            <small>
              <i className="bi bi-star-fill me-2"></i>
              Esta manifestação está em destaque
            </small>
          </div>
        )}
      </div>
    </div>
  );
}
