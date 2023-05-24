import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Videos from './components/Videos';
// import Footer from './components/Footer';

import{Button} from '@chakra-ui/react';
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import Footer from './components/Footer';
import Upload from './components/Upload';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return <Router>
    <Header/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/videos' element={<Videos/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
  </Router>
}

export default App