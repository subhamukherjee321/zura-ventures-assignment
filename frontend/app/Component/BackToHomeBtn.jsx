import Image from "next/image";
import home from "../../public/assets/svg/home.svg";

const BackToHomeBtn = () => {
  return (
    <div
      className="mt-6 mb-4 flex items-center justify-center gap-1 w-[11%] border-[0.7px] border-[#999] rounded-2xl py-0.5 px-3 ml-[9rem] cursor-pointer"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div className="w-[14%]">
        <Image src={home} alt="home" className="w-full" />
      </div>
      <div className="w-[86%]">Back to Home</div>
    </div>
  );
};

export default BackToHomeBtn;
