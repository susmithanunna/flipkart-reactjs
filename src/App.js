import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css';
import Heading1 from './components/Heading1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topoffers from './components/Topoffers';
import Become_a_Seller_form from './components/Become_a_Seller_form';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container-fluid' >
          <div className='row' >
            <Heading1 />
          </div>
          <Section2 />
          <Routes>
            <Route path='/Topoffers' element={<Topoffers />} />
            <Route path='/Become_a_Seller_form' element={<Become_a_Seller_form />} />
          </Routes>
          <div className="row section4row">
            <Section3 />
          </div>
          
          <Section4 />  
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
