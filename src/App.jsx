import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Container from './components/Layout/Container'


function App() {
  

  return (
  <>
     <Router>
      <Navbar/>
       

     <Container customClass="min-height"><Routes>

      <Route exact path="/" element={<Home/>}/>

      <Route exact path="/company" element={<Company/>}/>

      <Route exact path="/contact" element={<Contact/>}/>

      <Route exact path="/newproject" element={<NewProject/>}/>

      <Route exact path="/projects" element={<Projects/>}/>

     </Routes></Container>


     </Router>  

     <Footer/>
  </>
  )
}

export default App
