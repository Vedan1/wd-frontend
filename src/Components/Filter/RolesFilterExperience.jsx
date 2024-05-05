import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RolesFilterExperience() {
  const [Role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 240 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Experience</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Role}
          label="Experience"
          onChange={handleChange}
        >
          <MenuItem value={"0-2"}>Fresher</MenuItem>
          <MenuItem value={"2-5"}>Associate</MenuItem>
          <MenuItem value={"5-7"}>Mid-Level</MenuItem>
          <MenuItem value={"7-10"}>Senior</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
