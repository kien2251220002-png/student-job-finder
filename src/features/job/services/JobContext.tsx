import React, { createContext, useContext, useMemo, useState } from 'react';
import jobsData from '../data/jobs.json';
import { Job } from '../types';

type JobContextValue = {
  jobs: Job[];
  filteredJobs: Job[];
  categories: string[];
  searchText: string;
  selectedCategory: string;
  setSearchText: (value: string) => void;
  setSelectedCategory: (value: string) => void;
  getJobById: (id: string) => Job | undefined;
};

const JobContext = createContext<JobContextValue | null>(null);

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const jobs: Job[] = jobsData;

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(jobs.map((job) => job.category)))],
    [jobs]
  );

  const filteredJobs = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [job.title, job.company, job.location, job.jobType]
          .join(' ')
          .toLowerCase()
          .includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [jobs, selectedCategory, searchText]);

  const getJobById = (id: string) => jobs.find((job) => job.id === id);

  return (
    <JobContext.Provider
      value={{
        jobs,
        filteredJobs,
        categories,
        searchText,
        selectedCategory,
        setSearchText,
        setSelectedCategory,
        getJobById,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within JobProvider');
  }
  return context;
}
