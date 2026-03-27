import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { EcoLab } from './pages/EcoLab'
import { Intelligence } from './pages/Intelligence'
import { LivingQuestion } from './pages/LivingQuestion'
import { BuildWithUs } from './pages/BuildWithUs'
import { About } from './pages/About'
import { Journal } from './pages/Journal'
import { Contact } from './pages/Contact'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/eco-lab" element={<EcoLab />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/living-question" element={<LivingQuestion />} />
          <Route path="/build-with-us" element={<BuildWithUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
