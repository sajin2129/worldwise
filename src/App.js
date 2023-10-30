import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Login from './Login'
import About from './about';
import Price from './price';

import Loca from './Loca';
import City from './City'
import Visit from './Visit';
import Countr from './Countr';
import Addmap from './Addmap'
import { DataProvider } from './DataProvider';



function App() {





  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/pric' element={<Price />} />
            <Route path='/about' element={<About />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/loca' element={<Loca />}>

              <Route path='City' element={<City />}>  </Route>
              <Route path='City/Visit/:id' element={<Visit />}></Route>

              <Route path='Countr' element={<Countr />}></Route>
              <Route path='Addmap' element={<Addmap />}></Route>

            </Route>

            <Route path='*' element={<Home />} />

          </Routes>
        </BrowserRouter>

      </div>
    </DataProvider>
  );
}

export default App;

