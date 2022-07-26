import './App.css' 
import Home from './Components/Pages/Home'
import Container from './Components/Container/Container/Container'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' exact='true' element={<Container/>}/>    
          <Route path='/home' exact='true' element={<Home/>}/> 
        </Routes>
    </div>
  );
}

export default Ap;
