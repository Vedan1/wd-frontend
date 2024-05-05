import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RolesFilterEmp() {
  const [Role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120,maxWidth: 240  }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">No Of Employees</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Role}
          label="No Of Employees"
          onChange={handleChange}
        >
          <MenuItem value={0-100}>0-100</MenuItem>
          <MenuItem value={100-200}>100-200</MenuItem>
          <MenuItem value={200-500}>200-500</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
