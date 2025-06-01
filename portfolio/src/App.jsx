import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
  import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
