import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton } from "@mui/material";
import Link from "next/link";
import Header from "./Header";

//icon
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Array of navigation items with route and pathname
const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/categories/news",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "Post",
    pathname: "/post",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

function Navbar() {
  return (
    <>
      <Header></Header>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
            }}
          >
            <Image src={logo} alt="Logo" />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {navItems.map((item) => (
                <Link key={item.route} href={item.pathname}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box>
              <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <XIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
