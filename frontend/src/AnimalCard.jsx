import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function AnimalCard({ animal }) {
    return (
        <Card sx={{ maxWidth: 345 }}>

            {/* TODO add functionality to add different images to each card */}
            {/* <CardMedia
                
                sx={{ height: 140 }}
                image=""
                title=""
            /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {animal.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Age: {animal.age} years old<br />
                    Breed: {animal.breed} <br />
                    Sex: {animal.sex}<br />

                </Typography>
            </CardContent>
            {/* TODO add functionality to a clickable link to enable updating animals */}
            {/* <CardActions>
                
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        // TODO update to go to new page
                        console.info("I'm an animal.");
                    }}
                >
                    Edit
                </Link>
            </CardActions> */}
        </Card>
    );
}