import { useState } from "react";
import type { Manifestacao } from "../data/tipos";
import CardManifestacao from "./CardManifestacao";

const MANIFESTACOES_INICIAIS: Manifestacao[] = [
  {
    id: "1",
    tipo: "Reclamação",
    status: "Pendente",
    descricao:
      "Buraco na calçada da Rua das Flores próximo ao número 142, representando risco para pedestres.",
    dataAbertura: "10/06/2026",
    protocolo: "OUV-2026-001",
  },
  {
    id: "2",
    tipo: "Sugestão",
    status: "Em andamento",
    descricao:
      "Instalação de lixeiras de coleta seletiva nas praças públicas do bairro Centro.",
    dataAbertura: "12/06/2026",
    protocolo: "OUV-2026-002",
    destacado: true,
  },
  {
    id: "3",
    tipo: "Elogio",
    status: "Resolvido",
    descricao:
      "Excelente atendimento da equipe de limpeza urbana durante o evento na Praça Central.",
    dataAbertura: "14/06/2026",
    protocolo: "OUV-2026-003",
  },
  {
    id: "4",
    tipo: "Denúncia",
    status: "Pendente",
    descricao:
      "Descarte irregular de resíduos em terreno baldio na Rua Sete de Setembro.",
    dataAbertura: "15/06/2026",
    protocolo: "OUV-2026-004",
  },
];

export default function CatalogoManifestacoes() {
  const [manifestacoes] = useState<Manifestacao[]>(MANIFESTACOES_INICIAIS);
  const [termoBusca, setTermoBusca] = useState<string>("");

  const manifestacoesFiltradas: Manifestacao[] = manifestacoes.filter(
    (manifestacao): boolean => {
      const termo: string = termoBusca.toLowerCase();
      return (
        manifestacao.descricao.toLowerCase().includes(termo) ||
        manifestacao.tipo.toLowerCase().includes(termo) ||
        manifestacao.protocolo.toLowerCase().includes(termo)
      );
    },
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por tipo, descrição ou protocolo..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </div>

      {manifestacoesFiltradas.length === 0 ? (
        <div className="alert alert-secondary text-center">
          <i className="bi bi-search me-2"></i>
          Nenhuma manifestação encontrada para "{termoBusca}"
        </div>
      ) : (
        <div className="row">
          {manifestacoesFiltradas.map((manifestacao) => (
            <div key={manifestacao.id} className="col-md-6 col-lg-4">
              <CardManifestacao {...manifestacao} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
