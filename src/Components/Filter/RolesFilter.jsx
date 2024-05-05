import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RolesFilter() {
  const [Role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Role}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value={"Manager"}>Manager</MenuItem>
          <MenuItem value={"Developer"}>Developer</MenuItem>
          <MenuItem value={"Worker"}>Worker</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
