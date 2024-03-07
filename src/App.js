import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router>
   <Navbar/>
      <Container customclass="min_height">
         <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newproject' element={<NewProject />} />

      </Routes> 
      </Container>
      <Footer/>
    </Router>
  )
}

export default App;
