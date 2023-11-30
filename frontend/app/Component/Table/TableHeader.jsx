const TableHeader = ({ fields }) => {
    const length = fields.length;
  
    return (
      <div className={`grid grid-cols-4 bg-[#F8F8F8]  py-3`}>
        {fields.map((field, index) => (
          <div
            key={index}
            className={`text-xs 2xl:text-sm ${
             "text-center col-span-1"
            } font-bold uppercase `}
          >
            {field}
          </div>
        ))}
      </div>
    );
  };
  
  export default TableHeader;