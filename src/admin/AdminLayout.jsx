import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">N-Bazar Admin</h2>

        <nav className="space-y-4">
          <NavLink to="/admin" className="block">Dashboard</NavLink>
          <NavLink to="/admin/products" className="block">Products</NavLink>
          <NavLink to="/admin/orders" className="block">Orders</NavLink>
          <NavLink to="/admin/users" className="block">Users</NavLink>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
