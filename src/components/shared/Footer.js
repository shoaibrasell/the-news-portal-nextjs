import { Box, Button, Container, IconButton } from "@mui/material";
import React from "react";

//icon
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
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
      pathname: "/category",
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

  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box className="w-full text-center">
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
        <p className="text-white text-center"> @2024 Dragon News Portal Design by Shoaib Ullah Rasel</p>
      </Container>
    </Box>
  );
};

export default Footer;
