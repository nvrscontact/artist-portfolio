import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';

import HomePage from './Pages/HomePage'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import AboutMe from './Pages/AboutMe';

function App() {

  return (
    <>
    <section className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/' element={<HomePage/>} />
            <Route path='/aboutme' element={<AboutMe/>} />

          </Route>
        </Routes>
      </Router>
    </section>
    </>
  )
}

export default App
