import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Profile from './pages/Profile'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/reg' element={<Registration/>} />
       
        <Route path='/profile' element={<Profile/>} />

      </Routes>
      
    </div>
  )
}

export default App
