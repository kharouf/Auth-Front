import { Route, Routes ,Navigate, useNavigate} from 'react-router-dom';

import { Redirect} from "react-router";




import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, userCurrent } from './components/JS/userSlice/userSlice';
import Profile from './Profile';
import PrivateRoute from './PrivateRoutes/PrivateRoutes'; 


function App() {
  const isAuth = localStorage.getItem('token');
  const dispatch =useDispatch()
  const navigate =useNavigate()

  useEffect(() => {
    if(isAuth){
      dispatch(userCurrent())
    } 
    
    
  }, [])
  

  return (

    <>

    {/* zidou code hetha  
    
 {isAuth? <button onClick={()=>{ 
  dispatch(logout());
  navigate("/")
  }}>logout</button>: null } 

<Routes>
<Route exact path="/" element={<Register/>} />
<Route path="/login" element={<Login/>} />
<Route element={<PrivateRoute/>}>
<Route path="/profil" element={<Profile/>} /> 
</Route>{""}
  </Routes>    
  */}
 
    </>
  );
}

export default App;
