import Image from "next/image";
import homeVector from "../../public/assets/svg/home-vector1.svg";
import home from "../../public/assets/svg/home.svg";
import CreateNewProjectBtn from "./CreateNewProjectBtn";
import CreateProjectModal from "./CreateProjectModal";
import LoginModal from "./LoginModal";
import { useAuthStore } from "@/store/auth";

const HomeComponent = ({ openModal, isModalOpen, onClose }) => {
  const { auth } = useAuthStore((state) => state);
  return (
    <section>
      <div
        className="mt-6 mb-4 flex items-center justify-center gap-1 w-[11%] border-[0.7px] border-[#999] rounded-2xl py-0.5 px-3 ml-[9rem] cursor-pointer"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <div className="w-[14%]">
          <Image src={home} alt="home" className="w-full" />
        </div>
        <div className="w-[86%]">Back to Home</div>
      </div>

      <h1 className="text-4xl text-primary font-bold text-center">
        Create a New Project
      </h1>
      <div className="flex justify-center items-center mt-6">
        <Image src={homeVector} alt="vector-art" className="w-[30%]" />
      </div>
      <p className="text-center mx-auto w-[50%] text-[#838383] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>

      <CreateNewProjectBtn openModal={openModal} />
      {auth
        ? isModalOpen && <CreateProjectModal onClose={onClose} />
        : isModalOpen && <LoginModal isOpen={openModal} onClose={onClose} />}
    </section>
  );
};

export default HomeComponent;