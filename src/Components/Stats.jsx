

const Stats = () => {
  // Sample statistics data
  const statsData = [
    { title: 'Total Users', value: 100 },
    { title: 'Active Users', value: 75 },
    { title: 'Inactive Users', value: 25 },
    { title: 'Pending Users', value: 10 },
  ];

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-12 text-center">User Statistics</h2> {/* Centered heading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center transition-transform transform hover:scale-105"> {/* Added hover effect */}
            <h3 className="text-xl font-semibold">{stat.title}</h3>
            <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
