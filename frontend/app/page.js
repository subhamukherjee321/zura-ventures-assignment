"use client";

import { makeRequest } from "@/lib/api";
import { useProjectStore } from "@/store/project";
import { useEffect, useState } from "react";
import HomeComponent from "./Component/HomeComponent";
import HomeProjects from "./Component/HomeProjects";
import Navbar from "./Component/Navbar";

const getProject = async (limit = 10, page = 1) => {
  const res = await makeRequest(
    "GET",
    `/project/get?limit=${limit}&page=${page}`
  );
  return res;
};
export default function Home() {
  const { loading } = useProjectStore((state) => state);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const limit = 12;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const pageValue = 1;
    setPage(pageValue);
    getProject(limit, pageValue)
      .then((res) => {
        console.log("res", res);
        const data = res?.data || [];
        const tPage = res?.totalPages || 1;
        setProjectData(data);
        setTotalPage(tPage);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [loading]);

  const loadMore = () => {
    const pageValue = page + 1;
    setPage(pageValue);
    getProject(limit, page)
      .then((res) => {
        console.log("res", res);
        const data = res?.data || [];
        setProjectData((prev) => [...prev, ...data]);
      })
      .catch((err) => {
        console.log("error", err);
      });
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
        <HomeProjects
          loadMore={loadMore}
          showBtn={page < totalPage}
          projectData={projectData}
          isModalOpen={isModalOpen}
          onClose={closeModal}
          openModal={openModal}
        />
      )}
    </main>
  );
}
