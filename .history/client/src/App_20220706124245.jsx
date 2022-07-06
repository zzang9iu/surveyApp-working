import './App.css';
import {BrowserRouter, Route, Switch}from 'react-router-dom'
import Navb from "";
import Foot from "./Foot";
import Login from "./pages/login"
import Mainpage from "./pages/mainpage"
import Register from "./pages/register";

//import Mainpage from './pages/mainpage';
function App() {
 
  return (
     
    <BrowserRouter>
    <Navb/>
    <Switch>
      <Route path='/login'>
        <Login/>
       </Route>
       <Route path='/register'>
        <Register/>
       </Route>
       <Route path='/'>
        <Mainpage/>
       </Route>
       </Switch>
     <Foot/>  
       
    </BrowserRouter>
   
   
  
  )
};
export default App;
