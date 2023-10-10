import { useState } from "react";
import { Image } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { react, logo } from "../../assets";
import MenuIcon from "@mui/icons-material/Menu";
import { NavListDrawer } from "./NavListDrawer";

const navLinks = [
  {
    title: "HOME",
    path: "#home",
  },
  {
    title: "BIOGRAFÍA",
    path: "#biografia",
  },
];

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Container fixed>
          <Toolbar>
            {/* <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
            <IconButton>
              <img src={logo} alt="Logo" style={{ width: 35, height: 36 }} />
            </IconButton>
            <Typography variant="h9" sx={{ flexGrow: 1 }}>
              Nemecio's Blog
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navLinks.map((item) => (
                <Button
                  color="inherit"
                  key={item.title}
                  component="a"
                  href={item.path}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};
