import { useForm } from "react-hook-form";
import InputComponent from "../Component/InputComponent";

const CreateProjectModal = ({ onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <form className="bg-white p-8 rounded-lg w-[40%]" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-bold mb-4">Create Project</h2>
        <div className="mb-4">
          <InputComponent
            label="Enter Project Name"
            name={"project"}
            register={register}
            errors={errors}
            placeholder={"Type here"}
            type={"text"}
            required={true}
          />
        </div>

        <div className="flex justify-end items-center gap-4">
          <button
            className="text-red text-red-400 font-[500]"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-primary text-white font-bold py-1.5 px-4 rounded-md"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectModal;
