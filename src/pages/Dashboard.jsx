import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-shell">
        <Sidebar />

        <section className="dashboard-content">
          <header>
            <h1>Attendance</h1>
            <p>
              Welcome back, Romar De Leon. <span>[Admin]</span>
            </p>
          </header>

          <section className="summary-grid">
            <article className="summary-card department-card">
              <h2>MPDC</h2>
              <span>▼</span>
            </article>

            <article className="summary-card present-card">
              <p>Present today</p>
              <h3>
                9/12 <span className="badge">✓</span>
              </h3>
            </article>

            <article className="summary-card report-card">
              <p>Attendance report summary</p>
              <div>
                <span>Present</span>
                <span>Sick</span>
                <span>Vacation</span>
              </div>
            </article>
          </section>

          <section className="panel-grid">
            <article className="dashboard-panel">
              <div className="panel-header">
                <h2>Recent Activity</h2>
                <span>⇵</span>
              </div>
            </article>

            <article className="dashboard-panel">
              <div className="panel-header">
                <h2>Late Arrivals</h2>
              </div>
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;