import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property data from backend
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/properties/${id}`, { method: 'DELETE' });
    setProperties(properties.filter((prop) => prop._id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-bold">All Properties</h1>
  <Link 
    to="/admin/properties/new"
    className="bg-blue-600 text-black px-4 py-2 rounded">
    Add Properties
  </Link>
</div>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
           <tr> <th className="p-3">Title</th></tr>
           <tr><th className="p-3">Location</th></tr> 
            <tr><th className="p-3">Price</th></tr>
            <tr><th className="p-3">Actions</th></tr>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop._id} className="border-b">
              <td className="p-3">{prop.title}</td>
              <td className="p-3">{prop.location}</td>
              <td className="p-3">₹{prop.price}</td>
              <td className="p-3">
                <Link
                  to={`/properties/edit/${prop._id}`}
                  className="text-blue-500 mr-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(prop._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Properties;
