import Image from "next/image";
import { FaRegBell } from "react-icons/fa6";
import logo from "../../public/assets/svg/logo-icon.svg";
import setting from "../../public/assets/svg/settings.svg";

const Navbar = () => {
  return (
    <nav className="px-4 py-2 flex justify-between items-center sticky top-0 let-0 bg-white">
      <div className="flex items-center gap-2">
        <div>
          <Image src={logo} alt="logo" className="w-[80%]" />
        </div>
        <div className="text-3xl text-primary font-bold">LAMA.</div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div>
          <Image src={setting} alt="settings" className="w-[80%]" />
        </div>
        <div>
          <FaRegBell style={{ fontSize: "35px" }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
