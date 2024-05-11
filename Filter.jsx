import React from 'react';
import { TextField } from '@material-ui/core';

const Filter = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Filter;
