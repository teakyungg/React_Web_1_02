import { Route, Routes } from 'react-router-dom';
import MainPage from './main/MainPage.js';
import AboutPage from './about/AboutPage.js';


export default function App() {


  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} /> 
      </Routes>

    </div>




  );
}

