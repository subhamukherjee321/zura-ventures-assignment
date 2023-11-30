import { useState } from "react";
import BackToHomeBtn from "./BackToHomeBtn";
import CreateNewProjectBtn from "./CreateNewProjectBtn";
import CreateProjectModal from "./CreateProjectModal";

const HomeProjects = ({
  isModalOpen,
  openModal,
  onClose,
  projectData,
  loadMore,
  showBtn,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const formatDate = (date) => {
    if (!date) {
      return " day ago";
    }
    const providedDate = new Date(date);

    // Current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - providedDate;

    // Calculate the difference in days, weeks, months, and years
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const millisecondsInWeek = millisecondsInDay * 7;
    const millisecondsInMonth = millisecondsInDay * 30; // Approximation
    const millisecondsInYear = millisecondsInDay * 365; // Approximation

    const daysAgo = Math.floor(timeDifference / millisecondsInDay);
    const weeksAgo = Math.floor(timeDifference / millisecondsInWeek);
    const monthsAgo = Math.floor(timeDifference / millisecondsInMonth);
    const yearsAgo = Math.floor(timeDifference / millisecondsInYear);

    if (yearsAgo >= 1) {
      return yearsAgo === 1 ? " year ago" : " years ago";
    } else if (monthsAgo >= 1) {
      return monthsAgo === 1 ? " month ago" : " months ago";
    } else if (weeksAgo >= 1) {
      return weeksAgo === 1 ? " week ago" : " weeks ago";
    } else {
      return daysAgo === 1 ? " day ago" : " days ago";
    }
  };
  return (
    <section>
      <div>
        <BackToHomeBtn />
        <div className="flex justify-between items-center px-[9rem]">
          <h3 className="text-5xl font-bold text-primary">Projects</h3>
          <CreateNewProjectBtn openModal={openModal} />
        </div>
        {isModalOpen && <CreateProjectModal onClose={onClose} />}
      </div>

      <div className="grid grid-cols-3 px-[9rem] gap-6">
        {projectData?.map((ele) => (
          <div
            key={ele?._id}
            className="w-[68%] cursor-pointer rounded-md flex justify-center items-center gap-5 p-4 border border-gray-00"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div className="text-4xl text-white bg-primary p-4 rounded-md font-bold">
              {/* {ele?.name.match(/[A-Z]/g).slice(0, 2).join("")} */}SP
            </div>
            <div className="text-sm">
              <div className="text-md text-primary font-bold">{ele?.name}</div>
              <div className="my-2">{ele?.count} Episodes</div>
              <div className="text-xs">
                Last edited a {formatDate(ele?.updatedAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-6 mb-10 flex items-center justify-center">
        {isLoading ? (
          <button
            disabled
            type="submit"
            className="flex justify-center items-center cursor-not-allowed bg-primary text-white py-2 px-3 rounded-md hover:bg-purple-600 focus:outline-none"
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
          </button>
        ) : (
          showBtn && (
            <button
              className="bg-primary text-white font-bold py-1.5 px-4 rounded-md"
              type="submit"
              onClick={() => {
                setIsLoading(true);
                loadMore();
                setIsLoading(false);
              }}
            >
              Load More
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default HomeProjects;