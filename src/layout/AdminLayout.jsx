
import { Outlet } from 'react-router-dom'


const AdminLayout = () => {
  return (
    <div className=' bg-slate-900 '>
      <main className="container py-20 grid md:grid-cols-2  items-center gap-4">
        <Outlet />
      </main>
    </div>

  )
}

export default AdminLayout