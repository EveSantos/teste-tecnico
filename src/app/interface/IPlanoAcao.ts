export interface Problema {
  descricaoProblema: string;
  resultado: string;
  etapa: string;
  possuiCausa: string;
  prioridade: string;
  categoria: string;
}

export interface Objetivo {
  selecionado: boolean;
  nome: string;
  problemas: Problema[];
}

export interface Plano {
  plano: string;
  objetivos: Objetivo[];
}
