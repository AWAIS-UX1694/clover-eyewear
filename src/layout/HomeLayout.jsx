import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

export default function HomeLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
