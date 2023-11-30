import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import close from "../../public/assets/svg/close.svg";
import InputComponent from "./InputComponent";

const CreatePodcastModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
  } = useForm();

  const onSubmit = (data) => {
    console.log("formData", data);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 transition-opacity ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Upload</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Image src={close} alt="close" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <InputComponent
              label="Name"
              name={"name"}
              register={register}
              errors={errors}
              placeholder={"Type name"}
              type={"text"}
              required={true}
            />
          </div>
          <div className="mb-4">
            <InputComponent
                label="Description"
                name={"description"}
                register={register}
                errors={errors}
                placeholder={"Type description"}
                type={"textarea"}
                required={true}
              />
          </div>
          <div className="flex justify-end">
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePodcastModal;
