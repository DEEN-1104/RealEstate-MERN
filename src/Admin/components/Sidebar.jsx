import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li><Link to="/admin/dashboard" className="text-blue-600">Dashboard</Link></li>
        <li><Link to="/admin/properties" className="text-blue-600">Manage Properties</Link></li>
        <li><Link to="/admin/inquiries" className="text-blue-600">Inquiries</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
