import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import Links from './pages/Links';
import ContextPage from './pages/ContextPage';
import LinkExampleA from './components/LinkExampleA';
import LinkExampleB from './components/LinkExampleB';
import { ImagesContextProvider } from './context/ImagesContext';
import ImageDetail from './pages/ImageDetail';

import { Route, Routes } from 'react-router-dom';
import LazyComponentPage from './pages/LazyComponentPage';
import Rendimiento from './pages/Rendimiento';
import UseEffectPage from './pages/UseEffectPage';
import UseReducerPage from './pages/UseReducerPage';

function App() {
  return (

      <div className="App">
        <Header />
        <div className='container'>
          <ImagesContextProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/use-effect' element={<UseEffectPage/>} />
              <Route path='/use-reducer' element={<UseReducerPage/>} />
              <Route path='/links' element={<Links/>} />
              <Route path='/image' element={<ContextPage/>} />
              <Route path='/context' element={<ContextPage/>} />
              <Route path='/links/link-example-a' element={<LinkExampleA/>} />
              <Route path='/links/link-example-b' element={<LinkExampleB/>} />
              <Route path='/image/:id' element={<ImageDetail/>} />
              <Route path='/lazy-component' element={<LazyComponentPage/>}></Route>
              <Route path='/rendimiento' element={<Rendimiento/>}></Route>
            </Routes>
          </ImagesContextProvider>
        </div>
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></script>
      </div>
  );
}

export default App;
