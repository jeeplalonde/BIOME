import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DiscoveryProvider } from './context/DiscoveryContext'
import { HomePage } from './pages/HomePage'
import { TemplatePage } from './pages/TemplatePage'

function App() {
  return (
    <DiscoveryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/template/:num" element={<TemplatePage />} />
        </Routes>
      </BrowserRouter>
    </DiscoveryProvider>
  )
}

export default App
