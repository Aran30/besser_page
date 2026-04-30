import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Features from './pages/Features.jsx'
import Services from './pages/Services.jsx'
import Learn from './pages/Learn.jsx'
import Research from './pages/Research.jsx'
import Projects from './pages/Projects.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="services" element={<Services />} />
          <Route path="learn" element={<Learn />} />
          <Route path="research" element={<Research />} />
          <Route path="research/publications" element={<Research />} />
          <Route path="research/projects" element={<Projects />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
