
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Footer from './Components/Footer';

function App() {
  return (
    
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>  
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
