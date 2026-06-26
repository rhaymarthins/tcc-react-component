import { useState } from "react";
import type { Setor } from "../data/tipos";
import CardSetor from "./CardSetor";

const SETORES_INICIAIS: Setor[] = [
  {
    id: "1",
    nome: "Secretaria de Infraestrutura",
    responsavel: "Eng. Marcos Almeida",
    manifestacoesAtivas: 12,
    icone: "bi-cone-striped",
  },
  {
    id: "2",
    nome: "Secretaria de Meio Ambiente",
    responsavel: "Bióloga Carla Souza",
    manifestacoesAtivas: 5,
    icone: "bi-tree-fill",
  },
  {
    id: "3",
    nome: "Secretaria de Saúde",
    responsavel: "Dr. Pedro Lima",
    manifestacoesAtivas: 8,
    icone: "bi-heart-pulse-fill",
  },
  {
    id: "4",
    nome: "Secretaria de Limpeza Urbana",
    responsavel: "Joana Ferreira",
    manifestacoesAtivas: 3,
    icone: "bi-trash-fill",
  },
];

export default function CatalogoSetores() {
  const [setores] = useState<Setor[]>(SETORES_INICIAIS);
  const [termoBusca, setTermoBusca] = useState<string>("");

  const setoresFiltrados: Setor[] = setores.filter((setor): boolean => {
    const termo: string = termoBusca.toLowerCase();
    return (
      setor.nome.toLowerCase().includes(termo) ||
      setor.responsavel.toLowerCase().includes(termo)
    );
  });

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por setor ou responsável..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </div>

      {setoresFiltrados.length === 0 ? (
        <div className="alert alert-secondary text-center">
          <i className="bi bi-search me-2"></i>
          Nenhum setor encontrado para "{termoBusca}"
        </div>
      ) : (
        <div className="row">
          {setoresFiltrados.map((setor) => (
            <div key={setor.id} className="col-md-6 col-lg-3">
              <CardSetor {...setor} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
