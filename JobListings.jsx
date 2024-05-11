import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import JobListingCard from './JobListingCard';
import Filter from './Filter';

const JobListings = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: '',
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filteredListings = jobs.filter(job => {
      return (
        job.experience >= filters.minExperience &&
        job.company.toLowerCase().includes(filters.companyName.toLowerCase()) &&
        job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
        (filters.remote === '' || job.remote === filters.remote) &&
        job.techStack.toLowerCase().includes(filters.techStack.toLowerCase()) &&
        job.role.toLowerCase().includes(filters.role.toLowerCase()) &&
        job.basePay >= filters.minBasePay
      );
    });
    setFilteredJobs(filteredListings);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Filter label="Min Experience" value={filters.minExperience} onChange={(value) => setFilters({ ...filters, minExperience: value })} />
        {/* Other filters */}
      </Grid>
      <Grid item xs={12} md={9}>
        {filteredJobs.map((job, index) => (
          <JobListingCard key={index} job={job} />
        ))}
      </Grid>
    </Grid>
  );
};

export default JobListings;
