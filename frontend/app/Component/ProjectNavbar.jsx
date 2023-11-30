import Image from "next/image";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M31.9998 58C34.9332 58 37.3332 55.6 37.3332 52.6667H26.6665C26.6665 55.6 29.0665 58 31.9998 58ZM47.9998 42V28.6667C47.9998 20.48 43.6532 13.6267 35.9998 11.8133V10C35.9998 7.78667 34.2132 6 31.9998 6C29.7865 6 27.9998 7.78667 27.9998 10V11.8133C20.3732 13.6267 15.9998 20.4533 15.9998 28.6667V42L10.6665 47.3333V50H53.3332V47.3333L47.9998 42ZM42.6665 44.6667H21.3332V28.6667C21.3332 22.0533 25.3598 16.6667 31.9998 16.6667C38.6398 16.6667 42.6665 22.0533 42.6665 28.6667V44.6667Z"
              fill="#3C3C3C"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
