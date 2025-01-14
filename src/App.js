import Index from './Pages/index.js';
import About from './Pages/about.js';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  return (

    <div className="App">

      <Routes>
        <Route path='/' element = {<Index/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
      </Routes>

    </div>

  );
}

export default App;
