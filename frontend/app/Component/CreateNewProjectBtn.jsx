import Image from "next/image";
import plus from "../../public/assets/svg/plus.svg";

const CreateNewProjectBtn = ({openModal, onClose}) => {
  return (
    <div className="flex justify-center">
      <button
        className="bg-black text-white flex justify-center items-center gap-2 my-6 py-2.5 px-4 rounded-md"
        onClick={openModal}
      >
        <span className="w-[11%]">
          <Image src={plus} alt="plus" className="w-full" />
        </span>
        <span className="w-[80%] text-lg font-bold">Create New Project</span>
      </button>
    </div>
  );
};

export default CreateNewProjectBtn;
