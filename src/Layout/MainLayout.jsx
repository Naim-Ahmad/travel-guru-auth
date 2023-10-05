import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <div>
        <Toaster/>
        <Outlet></Outlet>
    </div>
  )
}
