import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects'
import Navbar from './Components/Navigation/Navbar'
import FullNav from './Components/Navigation/FullNav'


const App = () => {


  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <FullNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App