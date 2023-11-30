import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import close from "../../public/assets/svg/close.svg";
import InputComponent from "./InputComponent";
import { useParams } from "next/navigation";
import notification from "./toast";
import { makeRequest } from "@/lib/api";
import { usePodcastStore } from "@/store/podcast";


const addPodcastData = async (data) =>{
  const res = await makeRequest("POST", "/podcast/add", data);
  return res;
}
const CreatePodcastModal = ({ isOpen, onClose }) => {
  const { setLoading } = usePodcastStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    const bodyData = {
      description: data?.description,
      name: data?.name,
      projectId: id,
    };
    addPodcastData(bodyData).then((res) =>{
      setLoading();
      setIsLoading(false);
      onClose()
      reset();
      notification("success", "Successfully created");
    }).catch((error) =>{
      const err = error?.response?.data?.message;
      setIsLoading(false);
      if (err) {
        notification("error", err);
      } else {
        notification("error", "Something wen't wrong");
      }
    })
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
            {
              isLoading? <button
              disabled
              type="submit"
              className="flex justify-center items-center cursor-not-allowed bg-black text-white px-4 py-2 rounded-md"
            >
              <div>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="mt-[2px]">Loading...</div>
            </button> : <button className="bg-black text-white px-4 py-2 rounded-md">
              Save
            </button>
            }
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePodcastModal;
