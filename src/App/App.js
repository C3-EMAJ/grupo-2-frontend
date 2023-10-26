import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

export default function App() {
  return (
    <div className="flex">
      
      <Outlet />
    </div>
  );
}