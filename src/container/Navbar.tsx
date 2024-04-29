import NavMenubar from "@/components/navMenubar";
import ProfileMenu from "@/components/profileMenu";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between px-40 py-3 items-center">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Bislerium
      </h2>
      <NavMenubar />
      <ProfileMenu />
    </div>
  );
}
