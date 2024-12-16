import react from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './home/Home'
import Courses from './courses/Courses'
import Contacts from './contacts/Contacts'
import About from './about/About'
import Signup from './components/Signup'



function App() {
  

  return (
    <>
    <div className='light:bg-slate-100 light:text-black'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
