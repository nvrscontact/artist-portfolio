import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Layout from './Layout';

import HomePage from './Pages/HomePage'
import AboutMe from './Pages/AboutMe';
import Hear from './Pages/Hear';
import Albums from './Pages/Albums';

import {LanguageProvider} from './contexts/languages/context/LanguageContext';
import {GlobalContext} from './contexts/GlobalContext';

import Tour from './Pages/Tour';
import Store from './Pages/Store';


function App() {

  return (
    <>
      <GlobalContext>
        <Router>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/' element={<HomePage/>} />
              <Route path='/aboutme' element={<AboutMe/>} />
              <Route path='/hear' element={<Hear/>} />
              <Route path='/albums' element={<Albums/>} />
              <Route path='/tour' element={<Tour/>} />
              <Route path='/store' element={<Store/>} />
            </Route>
          </Routes>
        </Router>
      </GlobalContext>
    </>
  )
}

export default App


/*  './languages/context/LanguageContext' */