import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Wellness } from './pages/Wellness'
import { Research } from './pages/Research'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Journal } from './pages/Journal'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />

          {/* Redirects from old pages */}
          <Route path="/eco-lab" element={<Navigate to="/research" replace />} />
          <Route path="/intelligence" element={<Navigate to="/research" replace />} />
          <Route path="/living-question" element={<Navigate to="/about" replace />} />
          <Route path="/build-with-us" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
