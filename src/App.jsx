import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Layout from './Layout';
import {GlobalContext} from './contexts/GlobalContext';


import HomePage from './Pages/HomePage'
import Privacy from './Pages/Privacy';
import Hear from './Pages/HearAlbum';
import Albums from './Pages/SelectAlbum';
import Support from './Pages/Support';
import Tour from './Pages/Tour';
import Contact from './Pages/Contact';

import Store from './Pages/Store';
import Newsletter from './Pages/Newsletter';

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
              <Route path='/newsletter' element={<Newsletter/>} />
            </Route>
          </Routes>
        </Router>
      </GlobalContext>
    </>
  )
}

export default App