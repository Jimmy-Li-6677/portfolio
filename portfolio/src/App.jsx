import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
  import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  )
}

export default App
