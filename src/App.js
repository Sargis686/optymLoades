import logo from './logo.svg';
import './App.css';
import {
  // BrowserRouter,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import MainLayout from './components/Layouts/MainLayout';
import Profile from './components/Profile';
import AddDrivers from './components/AddDrivers';
import Drivers from './components/Drivers/Drivers';



function App() {
  const routes = useRoutes([
    {
      path:'', 
      element:<MainLayout/>,
//cherez outlet  MainLayout-i mecha mtnum RegistrationForm-y
//outlet-children-y qo uzac texy nkares

      children:[
        {path:'',element:<RegistrationForm />},
        {path:'profile', element:<Profile/>},
        {path:'add-driver', element:<AddDrivers/>},
        {path:'drivers', element:<Drivers/>},
      ]
    },

  ])
  return routes
}

export default App;
