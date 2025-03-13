import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./SignUp/SignUp.jsx";
import Login from "./LogiIn/Login.jsx";
import AgentSignUp from "./Agent/AgentSignUp.jsx";
import AgentLogin from "./Agent/AgentLogin.jsx";
import Home from "./Home/Home.jsx";
import Buy from "./Buy/Buy.jsx";
import Land from "./Land/Landbuy.jsx";
import Apartbuy from "./Apartment/Apartbuy.jsx";
import PoolHousebuy from "./PoolHouse/PoolHousebuy.jsx";
import BeachHousebuy from "./BeachHouse/BeachHousebuy.jsx";
import FarmHouse from "./FarmHouse/FarmHouse.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/buy" element={<Buy/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/land-buy" element={<Land/>}/>
                <Route path="/Apt-buy" element={<Apartbuy/>}/>
                <Route path="/PoolHousebuy" element={<PoolHousebuy/>}/>
                <Route path="/BeachHousebuy" element={<BeachHousebuy/>}/>
                <Route path="/FarmHousebuy" element={<FarmHouse/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/agentsignup" element={<AgentSignUp />} />
                <Route path="/agentlogin" element={<AgentLogin />} />
            </Routes>
        </Router>
    );
}

export default App;


