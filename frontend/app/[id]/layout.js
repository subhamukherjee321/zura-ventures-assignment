import Sidebar from "../Component/Sidebar";

export default function layout({ children }) {
  return (
    <div className="w-full flex gap-4">
      <div className="w-[300px] min-h-screen relative">
        <div className="fixed w-[280px] top-0 left-0 h-[100vh] bg-[#F3E8FF]">
          <Sidebar />
        </div>
      </div>
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
}
