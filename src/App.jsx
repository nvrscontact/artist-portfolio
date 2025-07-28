import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Layout from './Layout';


import {LanguageProvider} from './contexts/languages/context/LanguageContext';
import {GlobalContext} from './contexts/GlobalContext';


import HomePage from './Pages/HomePage'
import Privacy from './Pages/Privacy';
import Hear from './Pages/Hear';
import Albums from './Pages/Albums';
import Support from './Pages/Support';
import Tour from './Pages/Tour';
import Contact from './Pages/Contact';
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
              <Route path='/privacy' element={<Privacy/>} />
              <Route path='/hear' element={<Hear/>} />
              <Route path='/tour' element={<Tour/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/albums' element={<Albums/>} />
              <Route path='/support' element={<Support/>} />
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