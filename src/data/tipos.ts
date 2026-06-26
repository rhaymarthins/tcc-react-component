export interface Manifestacao {
  id: string;
  tipo: "Reclamação" | "Sugestão" | "Elogio" | "Denúncia";
  status: "Pendente" | "Em andamento" | "Resolvido";
  descricao: string;
  dataAbertura: string;
  protocolo: string;
  destacado?: boolean;
}

export interface Setor {
  id: string;
  nome: string;
  responsavel: string;
  manifestacoesAtivas: number;
  icone: string;
}
