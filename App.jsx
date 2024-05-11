import React from 'react';
import { Container } from '@material-ui/core';
import JobListings from './components/JobListings';
import jobsData from './data/jobs'; // Assuming you have a file with sample jobs data

const App = () => {
  return (
    <Container>
      <h1>Job Listings</h1>
      <JobListings jobs={jobsData} />
    </Container>
  );
};

export default App;
