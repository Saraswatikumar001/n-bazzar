export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat title="Total Orders" value="124" />
        <Stat title="Revenue" value="₹2,45,000" />
        <Stat title="Products" value="38" />
      </div>
    </div>
  );
}

const Stat = ({ title, value }) => (
  <div className="bg-white rounded-xl p-6 shadow">
    
    <p className="text-gray-500">{title}</p>
    <h3 className="text-2xl font-bold mt-2">{value}</h3>
  </div>
);
