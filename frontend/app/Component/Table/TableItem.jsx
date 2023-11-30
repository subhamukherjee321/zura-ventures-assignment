import EditModal from "./EditModal";

const TableItem = () => {
  return (
    <div className="grid grid-cols-4 text-xs 2xl:text-sm py-3 2xl:py-3 text-black border-b">
      <div className=" min-w-32 my-auto  px-9 font-semibold text-[black] flex items-center justify-center">
        Sample Name
      </div>

      <div className=" min-w-32 flex items-center justify-center  px-9   overflow-clip py-3 border">
        12 Jun 24 | 15:67
      </div>
      <div className=" min-w-32 flex items-center justify-center   py-3 border px-9">
        Done
      </div>

      <div className=" min-w-32  items-center text-center flex justify-center py-3 border gap-2 font-[500]">
        {/* <button className="cursor-pointer py-1 px-2 border border-gray-400 rounded-sm">
          Edit
        </button> */}
        <EditModal />
        <button className="text-red-600 cursor-pointer py-1 px-2 border border-gray-400 rounded-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TableItem;
