const Dashboard = () => {
    return (
      <>
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg">Total Properties</h3>
            <p className="text-2xl font-bold">48</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg">Total Users</h3>
            <p className="text-2xl font-bold">128</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg">Inquiries</h3>
            <p className="text-2xl font-bold">23</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Dashboard;
  