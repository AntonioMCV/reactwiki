import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import SimpleLinksPage from './pages/librerias/router-dom/SimpleLinksPage';
import DynamicLinksPage from './pages/librerias/router-dom/DynamicLinksPage';
import LinkExampleA from './components/LinkExampleA';
import LinkExampleB from './components/LinkExampleB';
import { ImagesContextProvider } from './context/ImagesContext';
import DynamicLinkDetailPage from './pages/librerias/router-dom/DynamicLinkDetailPage';

import { Route, Routes } from 'react-router-dom';
import LazyComponentPage from './pages/otros/LazyComponentPage';
import UseMemoPageUseCallback from './pages/hooks/UseMemoPageUseCallbackPage';
import UseEffectPage from './pages/hooks/UseEffectPage';
import UseReducerPage from './pages/hooks/UseReducerPage';
import ApiPage from './pages/otros/APIPage';
import ModuleCSSPage from 'pages/otros/ModuleCSSPage';
import ContextPage from 'pages/otros/ContextPage';
import BasicoPage from 'pages/librerias/redux/BasicoPage';
import ToolkitPage from 'pages/librerias/redux/ToolkitPage';

function App() {
  return (

      <div className="App">
        <Header />
        <div className='container'>
          <ImagesContextProvider>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/hooks/use-effect' element={<UseEffectPage/>} />
              <Route path='/hooks/use-memo-use-callback' element={<UseMemoPageUseCallback/>}></Route>
              <Route path='/hooks/use-reducer' element={<UseReducerPage/>} />
              <Route path='/librerias/redux/basico' element={<BasicoPage/>} />
              <Route path='/librerias/redux/toolkit' element={<ToolkitPage/>} />
              <Route path='/librerias/router-dom/simple-links' element={<SimpleLinksPage/>} />
              <Route path='/librerias/router-dom/dynamic-links' element={<DynamicLinksPage/>} />
              <Route path='/librerias/router-dom/simple-links/link-example-a' element={<LinkExampleA/>} />
              <Route path='/librerias/router-dom/simple-links/link-example-b' element={<LinkExampleB/>} />
              <Route path='/otros/module-css' element={<ModuleCSSPage/>} />
              <Route path='/otros/context' element={<ContextPage/>} />
              <Route path='/otros/lazy-component' element={<LazyComponentPage/>}></Route>
              <Route path='/otros/apis' element={<ApiPage/>}></Route>
              <Route path='/image/:id' element={<DynamicLinkDetailPage/>} />
            </Routes>
          </ImagesContextProvider>
        </div>
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></script>
      </div>
  );
}

export default App;
