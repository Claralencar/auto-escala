import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>ESCALA</h2>
        <p>Sistema de Escalas</p>
      </div>

      <nav className="sidebar-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/cadastro-alunos">Alunos</Link>
        <Link to="/cadastro-escala">Configurar Escalas</Link>
        <Link to="/escala" className="active-link">Gerar Escala</Link>
      </nav>

      <div className="sidebar-footer">
        <small>Auto-Escala</small>
      </div>
    </aside>
  )
}

export default Sidebar