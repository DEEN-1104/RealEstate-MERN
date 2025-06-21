import React from 'react'; import { Link } from 'react-router-dom';

const PropertyTable = ({ properties, onDelete }) => {
     return ( <table className="w-full bg-white rounded-xl shadow overflow-hidden"> 
     <thead className="bg-gray-100 text-left text-sm text-gray-600"> <tr>
         <th className="p-3">Title</th> <th className="p-3">Location</th>
          <th className="p-3">Price</th> <th className="p-3">Actions</th>
           </tr> </thead> <tbody className="text-sm text-gray-700"> 
            {properties.map((prop, index) => ( <tr key={index} className="border-t hover:bg-gray-50">
                 <td className="p-3">{prop.title}</td> <td className="p-3">{prop.location}</td> 
                 <td className="p-3">₹{prop.price}</td> <td className="p-3 space-x-2">
                     <Link to={`/properties/edit/${prop._id}`} className="text-blue-600 hover:underline" > Edit </Link>
                      <button onClick={() => onDelete(index)} className="text-red-500 hover:underline" > Delete </button> 
                      </td> </tr> ))} </tbody> </table> ); };

export default PropertyTable;