import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RolesFilterRemote() {
  const [Role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Remote</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Role}
          label="Remote"
          onChange={handleChange}
        >
          <MenuItem value={"Remote"}>Remote</MenuItem>
          <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
          <MenuItem value={"Onsite"}>Onsite</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
