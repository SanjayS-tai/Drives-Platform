import './App.css';
import {BrowserRouter as Router,Route,Routes,useNavigate} from "react-router-dom"
import Login from './components/Login/Login'
import UserHome from './pages/user/home/userHome';
import AdminHome from './pages/admin/home/adminHome';

function Navigation(){
  const navigate=useNavigate();
  return(
    <div>
      <button onClick={()=>navigate("/user")}>User</button>
      <button onClick={()=>navigate("/admin")}>Admin</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
      <Navigation />
      <Routes>
      <Route path='/user' element={<Login />}/>
      <Route path='/admin' element={<Login />}/>
      <Route path='/user/home' element={<UserHome/>}/>
      <Route path='/admin/home' element={<AdminHome/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
