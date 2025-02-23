import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Requests from './requests';
import AnimalCard from './AnimalCard';


export default function AnimalList() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        
          .then(json => setData(json))
          .catch(error => console.error(error));
    }, []);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
          <AnimalCard
                  animal={{
                    name: 'Hades', breed: 'cat', sex: 'male', age: '4'
                  }}
                />
        </Grid>
      </Grid>
    </Box>
  );
}