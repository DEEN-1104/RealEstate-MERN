import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import AddEditProperty from './pages/AddEditProperty';
import Inquiries from './pages/Inquiries';
import Login from './pages/Login';

const AdminApp = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/new" element={<AddEditProperty />} />
            <Route path="/properties/edit/:id" element={<AddEditProperty />} />
            <Route path="/inquiries" element={<Inquiries />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminApp;
