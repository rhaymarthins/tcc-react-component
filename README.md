# TCC React Component

Componente React desenvolvido como segunda atividade avaliativa da disciplina **Tecnologias Front-End** do curso de Pós Graduação Lato Sensu em Desenvolvimento Web e Mobile (IF Sudeste MG) - 2026.1.

## Sobre a Atividade

A tarefa consiste em construir um componente funcional em React com TypeScript e Bootstrap, aplicando os conceitos de JSX, props tipadas e estilização, relacionado ao projeto de TCC.

**Requisitos atendidos:**

- Componente funcional com props tipadas via interface TypeScript
- JSX para estruturar o conteúdo
- Renderização condicional com JSX
- Estilização com Bootstrap
- Pasta `components/` com arquivos organizados
- `App.tsx` como ponto de entrada exibindo o componente

## Sobre o Componente

O componente `CardManifestacao` representa uma manifestação cidadã registrada no sistema de ouvidoria pública do TCC. Ele exibe o tipo da manifestação, status, descrição, data de abertura e número de protocolo, com badges coloridas de acordo com o tipo e status, e renderização condicional para manifestações em destaque.

## Sobre o TCC

O componente faz parte do contexto do TCC intitulado **"NativePHP como ponte para aplicações desktop e mobile: Um estudo de caso no desenvolvimento de um sistema de ouvidoria para o setor público"**, que investiga o uso do NativePHP para desenvolver um sistema de ouvidoria pública a partir de um único projeto Laravel, entregando uma aplicação web para gestores e um aplicativo mobile para cidadãos.

## Tecnologias Utilizadas

- React 18
- TypeScript
- Bootstrap 5.3
- Bootstrap Icons 1.11
- Vite

## Estrutura do Projeto

```
tcc-react-component/

├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
├── components/
│   └── CardManifestacao.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Como Executar

**Pré-requisitos:** Node.js instalado na máquina.

Clone o repositório:

```bash
git clone https://github.com/rhaymarthins/tcc-react-component.git
```

Entre na pasta:

```bash
cd tcc-react-component
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador o endereço exibido no terminal, geralmente `http://localhost:5173`.

## Sobre o Autor

- Antonio Ray Martins Vieira
- Pós Graduação Lato Sensu em Desenvolvimento Web e Mobile (IF Sudeste MG) - 2026.1
- GitHub: [rhaymarthins](https://github.com/rhaymarthins)
- LinkedIn: [ray-martinss](https://linkedin.com/in/ray-martinss)
