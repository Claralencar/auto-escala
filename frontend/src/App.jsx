import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Escala from './pages/Escala'
import CadastroAlunos from './pages/CadastroAlunos'
import CadastroEscala from './pages/CadastroEscala'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escala" element={<Escala />} />
          <Route path="/cadastro-alunos" element={<CadastroAlunos />} />
          <Route path="/cadastro-escala" element={<CadastroEscala />} />
        </Routes>
      </main>
    </div>
  )
}

export default App