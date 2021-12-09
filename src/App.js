import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import CDU from "./components/pages/CDU";
import Plantas from "./components/pages/Plantas";
import {useState} from "react";

function App() {

    const setLocalMode = ()=>{
        try {
            setModoDia(!modoDia)
            window.localStorage.setItem('modoDia', modoDia)
        }catch (error){
            console.error(error)
        }
    }
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [modoDia, setModoDia] = useState(window.localStorage.getItem('modoDia'))

  return (
    <Router>
      <Sidebar modoDia={modoDia} setLocalMode={setLocalMode} sidebar={sidebar} showSidebar={showSidebar}/>
      <Switch>
          <Route path='/' exact ><Home modoDia={modoDia}/></Route>
          <Route path='/plantas/Info' exact><Plantas modoDia={modoDia}/></Route>
      </Switch>
    </Router>
  );
}

export default App;
