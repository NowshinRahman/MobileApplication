import {Routes, Route} from 'react-router-dom'

import ButtonPage from './pages/ButtonPage'
import AccordianPage from './pages/AccordianPage'
import ModalPage from './pages/ModalPage'
import NavBar from './components/NavBar'
import AlertPage from './pages/AlertPage';

//import AccordianPage from './pages/AccordianPage'
//IMPORTANT path here does not take a / before the route name
export default function App() {
  return (
    <div className= "container mx-auto grid-cols-6 gap-4 mt-4">
      <NavBar/>
      <div className='col-span-5 relative '>
        <Routes>
          <Route path= "/" element={<ButtonPage/>}/>
          <Route path= "accordian" element={<AccordianPage/>}/>
          <Route path= "modal" element={<ModalPage/>}/>
          <Route path="alert" element={<AlertPage />}/>
        </Routes>
      </div>
    </div>
)
}
