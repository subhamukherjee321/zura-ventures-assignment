"use client";

import { useState } from "react";
import HomeComponent from "./Component/HomeComponent";
import HomeProjects from "./Component/HomeProjects";
import Navbar from "./Component/Navbar";
import projectData from "./Data/projectData.js";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main>
      <Navbar />

      {projectData?.length < 1 ? (
        <HomeComponent
          isModalOpen={isModalOpen}
          openModal={openModal}
          onClose={closeModal}
        />
      ) : (
        <HomeProjects isModalOpen={isModalOpen} onClose={closeModal} openModal={openModal} />
      )}
    </main>
  );
}
