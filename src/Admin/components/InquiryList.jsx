const InquiryList = ({ inquiries }) => { 
    return ( <div className="overflow-x-auto rounded-xl shadow bg-white"> 
    <table className="w-full text-sm text-left">
         <thead className="bg-gray-100 text-gray-700"> 
            <tr> <th className="p-3">Name</th>
             <th className="p-3">Email</th>
              <th className="p-3">Message</th>
               <th className="p-3">Date</th> </tr> 
               </thead> <tbody className="text-gray-800"> 
                {inquiries.map((inq) => ( <tr key={inq._id} className="border-t hover:bg-gray-50">
                     <td className="p-3">{inq.name}</td> 
                     <td className="p-3">{inq.email}</td>
                      <td className="p-3">{inq.message}</td> 
                      <td className="p-3">{new Date(inq.createdAt).toLocaleString()}</td> </tr> ))}
                       </tbody> </table> </div> ); };

export default InquiryList;