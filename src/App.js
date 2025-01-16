import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage.js';
import AboutPage from './AboutPage.js';




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

