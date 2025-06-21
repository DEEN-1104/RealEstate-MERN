const Header = ({ adminName }) => { 
    return ( <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
         <h1 className="text-xl font-bold">Real Estate Admin</h1> 
         <div className="text-gray-600 text-sm">Logged in as {adminName}</div> </div> ); };

export default Header;

