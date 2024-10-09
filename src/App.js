import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Accueil from './pages/Accueil';
import Service from './pages/Service';
import Realisation from './pages/Realisation';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Apropos from './components/Apropos';
import Mention from './pages/Mention';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Routes>
            <Route path='/' Component={Accueil}></Route>
            <Route path='/accueil' Component={Accueil}></Route>
            <Route path='/apropos' Component={Apropos}></Route>
            <Route path='/service' Component={Service}></Route>
            <Route path='/realisation' Component={Realisation}></Route>
            <Route path='/blog' Component={Blog}></Route>
            <Route path='/contact' Component={Contact}></Route>
            <Route path='/mention' Component={Mention}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
