import Image from "next/image";
import { FaRegBell } from "react-icons/fa6";
import downArrow from "../../public/assets/svg/down-arrow.svg";
import englishFlag from "../../public/assets/svg/english-flag.svg";
import homeIcon from "../../public/assets/svg/purple-home.svg";

const ProjectNavbar = () => {
  return (
    <nav className="flex justify-between items-center mt-10 w-[100%]">
      <div className="flex items-center gap-3">
        <div className="w-[13%]">
          <Image src={homeIcon} alt="Home-Icon" className="w-full" />
        </div>
        <div>/</div>
        <div className="text-[#999999] font-[500]">Sampl Project</div>
        <div>/</div>
        <div className="text-primary font-bold">Upload</div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center gap-3">
          <div className="w-[25%]">
            <Image src={downArrow} alt="down-arrow-icon" className="w-full" />
          </div>
          <div className="font-bold text-lg">EN</div>
          <div className="w-[20%]">
            <Image src={englishFlag} alt="English-Flag" className="w-full" />
          </div>
        </div>

        <div className="w-[18%]">
          <FaRegBell style={{ fontSize: "35px" }} />
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
