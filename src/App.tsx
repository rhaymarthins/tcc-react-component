import CardManifestacao from "./components/CardManifestacao";

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
          <h1 className="fw-bold mt-2">Painel de Manifestações</h1>
          <p className="text-muted">
            Visualização do componente de exibição de manifestações cidadãs -
            TCC Antonio Ray
          </p>
        </div>
      </header>

      {/* Estatísticas */}
      <section className="stats-section">
        <div className="container">
          <div className="row g-3">
            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="bi bi-clipboard-data"></i>
                <span className="stat-number">4</span>
                <span className="stat-label">Total</span>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="bi bi-hourglass-split"></i>
                <span className="stat-number">2</span>
                <span className="stat-label">Pendentes</span>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="bi bi-arrow-repeat"></i>
                <span className="stat-number">1</span>
                <span className="stat-label">Em andamento</span>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="bi bi-check-circle"></i>
                <span className="stat-number">1</span>
                <span className="stat-label">Resolvidas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="cards-section">
        <div className="container">
          <h5 className="section-title mb-4">
            <i className="bi bi-list-ul me-2"></i>
            Manifestações Recentes
          </h5>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <CardManifestacao
                tipo="Reclamação"
                status="Pendente"
                descricao="Buraco na calçada da Rua das Flores próximo ao número 142, representando risco para pedestres."
                dataAbertura="10/06/2026"
                protocolo="OUV-2026-001"
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <CardManifestacao
                tipo="Sugestão"
                status="Em andamento"
                descricao="Instalação de lixeiras de coleta seletiva nas praças públicas do bairro Centro."
                dataAbertura="12/06/2026"
                protocolo="OUV-2026-002"
                destacado
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <CardManifestacao
                tipo="Elogio"
                status="Resolvido"
                descricao="Excelente atendimento da equipe de limpeza urbana durante o evento na Praça Central."
                dataAbertura="14/06/2026"
                protocolo="OUV-2026-003"
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <CardManifestacao
                tipo="Denúncia"
                status="Pendente"
                descricao="Descarte irregular de resíduos em terreno baldio na Rua Sete de Setembro."
                dataAbertura="15/06/2026"
                protocolo="OUV-2026-004"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container text-center">
          <small>
            Atividade 2 - Tecnologias Front-End | Pós Graduação em
            Desenvolvimento Web e Mobile (IF Sudeste MG) - 2026.1
          </small>
        </div>
      </footer>
    </>
  );
}
