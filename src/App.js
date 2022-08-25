import { lazy, Suspense } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navigation from './component/Navigation/Nav';
import Main from './component/Main/Main';
const Index = lazy(()=>import('./component/HomepageEnglish'))
const ContactUs= lazy(()=>import('./component/SharedComponent/ContactUs'))
const Footer = lazy(()=>import('./component/Footer/Footer'))
const Idn = lazy (()=>import('./component/HomepageIndonesia'))

function App() {
  return (
    <Router>
       <div className='container-fluid bg-light' style={{ overflow: 'hidden' }} >
            <Navigation  />
            <Main>                
                <Suspense fallback={<div className='flex justify-center w-full mt-5' >Loading ...</div>}>
                    <Routes>
                        <Route exact path='/' element={<Index/>} />
                        <Route path='/lang=idn' element={<Idn/>} />
                        <Route path='/lang=en' element={<Index/>} />
                    </Routes>
                </Suspense>
            </Main>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
