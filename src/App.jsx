
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderComp from './components/headerComponent/headerComponen'
import HomePage from './Page/HomePage/HomePage'
import ContactPage from './Page/Departments/Departments'
import AboutPage from './Page/AboutPage/AboutPage'
import ProductPage from './Page/Events/Events'

function App() {
  

  return (
    <>
    
     <BrowserRouter>
     <HeaderComp/>
     <Routes>
           <Route path ='/' element={<HomePage/>}>HomePage</Route>
           <Route path='/Departments' element={<ContactPage/>}>ContactPage</Route>
           <Route path='/AboutPage' element={<AboutPage/>}>ContactPage</Route>
           <Route path='/Events' element={<ProductPage/>}>ContactPage</Route>
        </Routes>
        
     </BrowserRouter>


     <footer className="footer ">
        <p>© 2024 Saveetha Engineering College. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
