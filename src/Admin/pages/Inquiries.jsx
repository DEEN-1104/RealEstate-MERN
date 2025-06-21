import { useEffect, useState } from 'react';

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetch('/api/inquiries')
      .then((res) => res.json())
      .then((data) => setInquiries(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inquiries</h1>
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq) => (
              <tr key={inq._id} className="border-b">
                <td className="p-3">{inq.name}</td>
                <td className="p-3">{inq.email}</td>
                <td className="p-3">{inq.message}</td>
                <td className="p-3">{new Date(inq.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inquiries;
