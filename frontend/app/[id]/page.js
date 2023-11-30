"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import cloudUpload from "../../public/assets/svg/cloud_upload.svg";
import CreatePodcastModal from "../Component/CreatePodcastModal";
import ProjectNavbar from "../Component/ProjectNavbar";
import TableHeader from "../Component/Table/TableHeader";
import TableItem from "../Component/Table/TableItem";
import podcastUploadData from "../Data/podCastUploadData";
import { makeRequest } from "@/lib/api";
import { useParams } from "next/navigation";
import { usePodcastStore } from "@/store/podcast";
import notification from "../Component/toast";

const getPodcast = async (limit = 12, page = 1, projectId) => {
  const res = await makeRequest(
    "GET",
    `/podcast/get?limit=${limit}&page=${page}&projectId=${projectId}`
  );
  return res;
};
const updatepodcast = async (id, data) => {
  const res = await makeRequest("PATCH", `/podcast/update/${id}`, data);
  return res;
};
export default function page() {
  const { loading } = usePodcastStore((state) => state);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [condition, setCondition] = useState("home");
  const [podcast, setPodcast] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const limit = 12;
  const [editDesc, setEditDesc] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [podcastId, setPodcastId] = useState("");
  const [showInput, setShowInput] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (id) {
      const pageValue = 1;
      setPage(pageValue);
      getPodcast(limit, pageValue, id).then((res) => {
        console.log("podcast", res);
        setCondition("table");
        const data = res?.data || [];
        const tPage = res?.totalPages || 1;
        setPodcast(data);
        setTotalPage(tPage);
      });
    }
  }, [loading]);

  const handleContentChange = (event) => {
    const newContent = event.target.textContent;
    setNewDesc(newContent);
  };

  const handleUpdate = () => {
    if (podcastId) {
      const bodyData = {
        description: newDesc,
      };
      updatepodcast(podcastId, bodyData)
        .then((res) => {
          notification("success", "Successfully updated");
        })
        .catch((error) => {
          const err = error?.response?.data?.message;
          if (err) {
            notification("error", err);
          } else {
            notification("error", "Something wen't wrong");
          }
        });
    }
  };

  return (
    <section className="w-[90%] mx-auto min-h-screen">
      <ProjectNavbar />

      {condition == "home" && (
        <div>
          <h1 className="text-3xl font-bold text-primary mt-8">Upload</h1>

          <div className="grid grid-cols-3 gap-x-[5rem] gap-y-[2rem] mt-10 cursor-pointer">
            {podcastUploadData?.map((ele) => (
              <div
                key={ele?.id}
                className="flex items-center gap-4 border border-gray-400 p-3 rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                onClick={openModal}
              >
                <div className="w-[15%]">
                  <Image src={ele?.image} alt={ele?.title} className="w-full" />
                </div>
                <div className="font-bold text-sm">
                  <div>Upload</div>
                  <div>{ele?.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[#999999] text-center my-8 text-xl">or</div>

          <div className="p-3 w-full rounded-md border border-dashed border-[#999]">
            <div className="flex justify-center">
              <Image src={cloudUpload} alt="Cloud-Upload" />
            </div>
            <p className="text-center text-[#49454F] mt-3">
              Select a file or drag and drop here (Podcast Media or
              Transcription Text)
            </p>
            <p className="text-[#00000066] text-sm text-center mb-3">
              MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
            </p>
            <div className="flex justify-center">
              <button
                className="py-2 px-5 text-sm text-primary font-[500] border border-primary rounded-[7rem] hover:bg-primary hover:text-white active:bg-purple-600"
                onClick={openModal}
              >
                Select File
              </button>
            </div>
          </div>
        </div>
      )}
      {/* */}

      {condition == "table" && (
        <div>
          <div className="grid grid-cols-3 gap-[3rem] mt-10 cursor-pointer w-[70%]">
            {podcastUploadData?.map((ele) => (
              <div
                key={ele?.id}
                className="flex items-center gap-4 border border-gray-400 p-3 rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                onClick={openModal}
              >
                <div className="w-[15%]">
                  <Image src={ele?.image} alt={ele?.title} className="w-full" />
                </div>
                <div className="font-bold text-sm">
                  <div>Upload</div>
                  <div>{ele?.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary py-2.5 px-10 flex gap-6 justify-between items-center mt-10 rounded-xl">
            <div className="text-white">
              All files are processed! Your widget is ready to go!
            </div>
            <div>
              <button className="bg-white text-primary py-1 px-5 font-bold rounded-md">
                Try it out!
              </button>
            </div>
          </div>

          <div className="overflow-x-auto border border-gray-400 my-10 rounded-md">
            <div className="min-w-[70rem] border-b border-gray-400">
              <TableHeader
                fields={["Name", "Upload Date & Time", "Status", "Actions"]}
              />
            </div>
            {podcast.length > 0 ? (
              <div className="min-w-[70rem]">
                {podcast.map((pod) => (
                  <TableItem
                    key={pod._id}
                    {...pod}
                    setEditDesc={setEditDesc}
                    setPodcastId={setPodcastId}
                    setCondition={setCondition}
                  />
                ))}
              </div>
            ) : (
              <div className="flex justify-center text-xl font-bold text-gray-400 mt-20">
                No Podcast Found
              </div>
            )}
          </div>
        </div>
      )}

      {condition === "edit" && (
        <div>
          <div className="flex justify-between items-center mt-10">
            <h1 className="text-3xl font-bold text-primary">Edit Transcript</h1>
            <div className="flex gap-6">
              <button onClick={() => setCondition("table")} className="py-2 px-6 border border-red-600 text-red-600 rounded-md">
                Discard
              </button>
              <button onClick={handleUpdate} className="py-2 px-6 bg-black text-white rounded-md">
                Save & exit
              </button>
            </div>
          </div>
          {/* {showInput ? (
            ""
          ) : ( */}
          <div
            contentEditable={true}
            className="w-full cursor-pointer h-[400px] p-4 border border-black rounded-md mt-8 overflow-y-scroll"
            onInput={handleContentChange}
            // dangerouslySetInnerHTML={{ __html: editDesc }}
          >
            {editDesc}
          </div>
          {/* )} */}
        </div>
      )}

      <CreatePodcastModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
