import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import BackToTop from './BackToTop.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" key={pathname} className="flex-1 anim-fade-in">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
