import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Layout from './Layout';

import HomePage from './Pages/HomePage'
import AboutMe from './Pages/AboutMe';

import {LanguageProvider} from './languages/context/LanguageContext';


function App() {

  return (
    <>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/' element={<HomePage/>} />
              <Route path='/aboutme' element={<AboutMe/>} />

            </Route>
          </Routes>
        </Router>
      </LanguageProvider>
    </>
  )
}

export default App
