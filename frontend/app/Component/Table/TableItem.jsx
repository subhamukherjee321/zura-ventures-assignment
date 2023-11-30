import { usePodcastStore } from "@/store/podcast";
import notification from "../toast";
import EditModal from "./EditModal";
import { makeRequest } from "@/lib/api";


const deletePodcast = async (id) =>{
  const res = await makeRequest("DELETE", `/podcast/delete/${id}`);
  return res;
}
const TableItem = ({ name, createdAt, _id, description,  setCondition, setPodcastId, setEditDesc }) => {
  const { setLoading } = usePodcastStore((state) => state);
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
  
    const year = date.getFullYear().toString().slice(2); // Get last two digits of the year
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date); // Get abbreviated month name
    const day = date.getDate().toString().padStart(2, '0'); // Get day with leading zero if needed
    const hours = date.getHours().toString().padStart(2, '0'); // Get hours with leading zero if needed
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes with leading zero if needed
  
    return `${day} ${month} ${year} | ${hours}:${minutes}`;
  };

  const handleDelete = () =>{
    deletePodcast(_id).then((res) =>{
      notification("success", "Successfully deleted");
      setLoading()
    }).catch((err) =>{
      console.log("err", err)
      notification("error", "Something wen't wrong");
    })
  }
  return (
    <div className="grid grid-cols-4 text-xs 2xl:text-sm py-3 2xl:py-3 text-black border-b">
      <div className=" min-w-32 my-auto  px-9 font-semibold text-[black] flex items-center justify-center">
        {name}
      </div>

      <div className=" min-w-32 flex items-center justify-center  px-9   overflow-clip py-3 border">
        {formatDate(createdAt)}
      </div>
      <div className=" min-w-32 flex items-center justify-center   py-3 border px-9">
        Done
      </div>

      <div className=" min-w-32  items-center text-center flex justify-center py-3 border gap-2 font-[500]">
        <button onClick={() => {setEditDesc(description);setCondition("edit"); setPodcastId(_id)}} className="cursor-pointer py-1 px-2 border border-gray-400 rounded-sm">
          Edit
        </button>
        {/* <EditModal /> */}
        <button onClick={handleDelete} className="text-red-600 cursor-pointer py-1 px-2 border border-gray-400 rounded-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TableItem;
