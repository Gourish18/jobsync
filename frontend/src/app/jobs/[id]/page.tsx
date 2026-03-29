"use client";
import { job_service, useAppData } from "@/context/AppContext";
import { Application, Job } from "@/type";
import axios from "axios";
import App from "next/app";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
const JobPage = () => {
  const { id } = useParams();
  const { user, isAuth, applyJob, applications, btnLoading } = useAppData();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (applications && id) {
      applications.forEach((item: any) => {
        if (item.job_id === id) setApplied(true);
      });
    }
  }, [applications, id]);
  const applyJobHandler = (id: number) => {
    applyJob(id);
  };
  const[loading,setLoading] = useState(true);
  async function fetchSingleJob() {
  try {
    const { data } = await axios.get(
      `${job_service}/api/job/${id}`
    );

    setJob(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  fetchSingleJob();
}, [id]);

  return <div>JobPage</div>;
};

export default JobPage;
