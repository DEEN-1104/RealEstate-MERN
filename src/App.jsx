import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User-facing components
import SignUp from "./SignUp/SignUp.jsx";
import Login from "./LogiIn/Login.jsx";
import AboutUS from "./AboutUs/About.jsx";
import Agent from "./Agent/Agent.jsx";
import Home from "./Home/Home.jsx";
import HomeBuy from "./Buy/Home-Buy/Buy.jsx";
import Land from "./Buy/Land-Buy/Landbuy.jsx";
import ApartmentBuy from "./Buy/Apartment-Buy/Apartbuy.jsx";
import PoolHouseBuy from "./Buy/PoolHouse-buy/PoolHousebuy.jsx";
import BeachHouseBuy from "./Buy/BeachHouse-Buy/BeachHousebuy.jsx";
import FarmHouseBuy from "./Buy/FarmHouse-Buy/FarmHouse.jsx";
import HomeRent from "./Rent/Home-Rent/Homerent.jsx";
import Landrent from "./Rent/Land-Rent/Landrent.jsx";
import Apartmentrent from "./Rent/Apartment-Rent/Apartrent.jsx";
import PoolHouserent from "./Rent/PoolHouse-Rent/PoolHouserent.jsx";
import BeachHouserent from "./Rent/BeachHouse-Rent/BeachHouserent.jsx";
import FarmHouserent from "./Rent/FarmHouse-Rent/FarmHouserent.jsx";

// Admin dashboard components
import Sidebar from './Admin/components/Sidebar';
import DashBoard from './Admin/pages/DashBoard';
import Properties from './Admin/pages/Properties';
import AddEditProperty from './Admin/pages/AddEditProperty';
import Inquiries from './Admin/pages/Inquiries';
import AdminLogin from './Admin/pages/Logina'; // Renamed to avoid clash with user Login

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<HomeBuy />} />
        <Route path="/rent" element={<HomeRent />} />
        <Route path="/AboutUs" element={<AboutUS />} />
        <Route path="/Agent" element={<Agent />} />
        <Route path="/land-buy" element={<Land />} />
        <Route path="/Apt-buy" element={<ApartmentBuy />} />
        <Route path="/PoolHousebuy" element={<PoolHouseBuy />} />
        <Route path="/BeachHousebuy" element={<BeachHouseBuy />} />
        <Route path="/FarmHousebuy" element={<FarmHouseBuy />} />
        <Route path="/landrent" element={<Landrent />} />
        <Route path="/Aptrent" element={<Apartmentrent />} />
        <Route path="/PoolHouserent" element={<PoolHouserent />} />
        <Route path="/BeachHouserent" element={<BeachHouserent />} />
        <Route path="/FarmHouserent" element={<FarmHouserent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={
          <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
              <Routes>
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="properties" element={<Properties />} />
                <Route path="properties/new" element={<AddEditProperty />} />
                <Route path="properties/edit/:id" element={<AddEditProperty />} />
                <Route path="inquiries" element={<Inquiries />} />
              </Routes>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;