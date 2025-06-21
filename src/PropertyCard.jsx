import React from 'react';
import axios from 'axios';

const PropertyCard = ({ property, userId }) => {
  const handleLike = async () => {
    try {
      const response = await axios.post("http://localhost:3002/like-property", {
        userId: userId,
        propertyId: property._id,
      });
      alert("✅ " + response.data); // or show a toast
    } catch (error) {
      console.error("❌ Error liking property:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{property.title}</h2>
      <p>{property.description}</p>
      <button
        onClick={handleLike}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        ❤️ Like
      </button>
    </div>
  );
};

export default PropertyCard;
