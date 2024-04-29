import { NavLink } from "react-router-dom";
import { Menubar } from "./ui/menubar";

export default function NavMenubar() {
  return (
    <div>
      <Menubar className="gap-5 px-4 ">
        <NavLink to="/">Blogs</NavLink>
        <NavLink to="/">Post</NavLink>
        <NavLink to="/">My Blogs</NavLink>
      </Menubar>
    </div>
  );
}
