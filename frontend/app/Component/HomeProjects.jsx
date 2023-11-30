import projectData from "../Data/projectData";
import BackToHomeBtn from "./BackToHomeBtn";
import CreateNewProjectBtn from "./CreateNewProjectBtn";
import CreateProjectModal from "./CreateProjectModal";

const HomeProjects = ({ isModalOpen, openModal, onClose }) => {
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
            key={ele?.id}
            className="w-[68%] cursor-pointer rounded-md flex justify-center items-center gap-5 p-4 border border-gray-00"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div className="text-4xl text-white bg-primary p-4 rounded-md font-bold">
              {ele?.title.match(/[A-Z]/g).slice(0, 2).join("")}
            </div>
            <div className="text-sm">
              <div className="text-md text-primary font-bold">{ele?.title}</div>
              <div className="my-2">{ele?.episodes} Episodes</div>
              <div className="text-xs">Last edited a week ago</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
