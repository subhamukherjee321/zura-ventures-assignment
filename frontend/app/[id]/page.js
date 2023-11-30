"use client";

import Image from "next/image";
import { useState } from "react";
import cloudUpload from "../../public/assets/svg/cloud_upload.svg";
import CreatePodcastModal from "../Component/CreatePodcastModal";
import ProjectNavbar from "../Component/ProjectNavbar";
import podcastUploadData from "../Data/podCastUploadData";

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="w-[90%] mx-auto min-h-screen">
      <ProjectNavbar />

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
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p className="text-[#00000066] text-sm text-center mb-3">
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
        </p>
        <div className="flex justify-center">
          <button className="py-2 px-5 text-sm text-primary font-[500] border border-primary rounded-[7rem] hover:bg-primary hover:text-white active:bg-purple-600" onClick={openModal}>
            Select File
          </button>
        </div>
      </div>
      <CreatePodcastModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
