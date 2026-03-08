import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Scheduler from "./pages/Scheduler";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/employees" element={<Employees/>}/>
<Route path="/scheduler" element={<Scheduler/>}/>

</Routes>

</BrowserRouter>

)

}

export default App