import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 50,
                                width: 50,
                            }}
                            alt="Logo."
                            src="/Grazioso Salvare Logo.png"
                        />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Grazioso Salvare
                    </Typography>
                    {/* TODO add button functionality */}
                    {/* <Button color="inherit">Add Animal</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}