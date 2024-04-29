import Navbar from "@/container/Navbar";
import { Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export default function UserLayout() {
  return (
    <div>
      <Navbar />
      <Separator />
      <div className="mx-40 my-6">
        <Outlet />
      </div>
    </div>
  );
}
