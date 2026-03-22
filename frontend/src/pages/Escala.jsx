import { useEffect, useState } from 'react'
import { semanaMock } from '../data/escalaMock'
import api from '../services/api'

function Escala() {
  const [periodo, setPeriodo] = useState('Semana Atual')
  const [tipoEscala, setTipoEscala] = useState('Todas as Escalas')
  const [statusApi, setStatusApi] = useState('Carregando status da API...')
  const [erroApi, setErroApi] = useState('')

  useEffect(() => {
    api.get('/api/status')
      .then((response) => {
        setStatusApi(response.data)
      })
      .catch((error) => {
        console.error(error)
        setErroApi('Erro ao conectar com a API')
      })
  }, [])

 const handleBaixarPdf = () => {
  alert('PDF do aditamento será gerado pelo backend em uma próxima etapa.')
}

const handleEnviarAditamento = () => {
  alert('Envio automático para os responsáveis será integrado ao backend.')
}

  return (
    <div className="escala-page">
      <div className="escala-header">
        <div>
          <h1>Gerar Escala</h1>
          <p>Visualize o calendário e gere o PDF do aditamento</p>
        </div>

        <div className="escala-actions">
          <button className="secondary-button" onClick={handleBaixarPdf}>
            Baixar PDF
          </button>
          <button className="primary-button" onClick={handleEnviarAditamento}>
            Enviar Aditamento
          </button>
        </div>
      </div>

      <div className="escala-filters">
        <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
          <option>Semana Atual</option>
          <option>Próxima Semana</option>
        </select>

        <select value={tipoEscala} onChange={(e) => setTipoEscala(e.target.value)}>
          <option>Todas as Escalas</option>
          <option>Escala de Serviço</option>
          <option>Escala de Formatura</option>
        </select>
      </div>

      <div className="info-box">
        <h3>Status da Integração com a API</h3>
        <p>{erroApi ? erroApi : statusApi}</p>
      </div>

      <div className="calendar-grid">
        {semanaMock.map((item, index) => (
          <div
            key={index}
            className={`calendar-card ${item.fimDeSemana ? 'weekend' : ''}`}
          >
            <div className="calendar-top">
              <span>{item.dia}</span>
              <h2>{item.data}</h2>
            </div>

            <div className="calendar-list">
              {item.nomes.map((nome, idx) => (
                <div key={idx} className="nome-card">
                  {nome}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="info-box">
        <h3>Envio Automático do Aditamento</h3>
        <p>
          O PDF será enviado automaticamente para o Comandante de Companhia,
          Sargenteante e demais responsáveis.
        </p>
      </div>
    </div>
  )
}

export default Escala