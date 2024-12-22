import react from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Contacts from './contacts/Contacts';
import About from './about/About';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


function App() {
  const[authUser,setAuthUser] = useAuth();
  // console.log(authUser);
  

  return (
    <>
    <div className=''>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser ? <Courses/> : <Navigate to="/signup" />}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App
