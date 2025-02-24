import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import * as Requests from './requests';
import AnimalCard from './AnimalCard';


export default function AnimalList() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    Requests.getAnimals()
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  console.log(data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
          {data == null ? "Loading..." :
            //for loop to get every animal card
            data.map((item, index) => (
              <AnimalCard key={index} animal={item} />
            ))
          }
        </Grid>
      </Grid>
    </Box>
  );
}