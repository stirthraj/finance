import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';

export default function BasicAppBar({ cart, setCart }) {
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Finance
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Badge
            onClick={() => {
              alert('Check Console');
              console.log({ cart });
            }}
            badgeContent={cart.length}
            color="primary"
          >
            {/* <MailIcon color="action" /> */}
            <AddShoppingCartIcon color="action" />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
