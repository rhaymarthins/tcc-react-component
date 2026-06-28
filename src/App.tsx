import CatalogoManifestacoes from "./components/CatalogoManifestacoes";
import CatalogoSetores from "./components/CatalogoSetores";

export default function App() {
  return (
    <>
      {/* Header */}
      <header className="app-header">
        <div className="container">
          <span className="app-label mb-3">
            <i className="bi bi-megaphone-fill me-2"></i>
            Sistema de Ouvidoria Pública
          </span>
          <h1 className="fw-bold mt-2">Catálogo Dinâmico</h1>
          <p className="text-muted">
            Visualização e busca de manifestações e setores — TCC Antonio Ray
          </p>
        </div>
      </header>

      {/* Manifestações */}
      <section className="cards-section">
        <div className="container">
          <h5 className="section-title mb-4">
            <i className="bi bi-list-ul me-2"></i>
            Manifestações
          </h5>
          <CatalogoManifestacoes />
        </div>
      </section>

      {/* Setores */}
      <section className="cards-section">
        <div className="container">
          <h5 className="section-title mb-4">
            <i className="bi bi-diagram-3-fill me-2"></i>
            Setores Responsáveis
          </h5>
          <CatalogoSetores />
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container text-center">
          <small>
            Atividade — Tecnologias Front-End | Pós Graduação em Desenvolvimento
            Web e Mobile (IF Sudeste MG) - 2026.1
          </small>
        </div>
      </footer>
    </>
  );
}
