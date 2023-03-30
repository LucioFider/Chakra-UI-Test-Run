import React from "react";
import { Box, HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { MdCheckCircle, MdSettings } from "react-icons/md";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="30px" />
      <Box justifyContent="space-between" spacing={5}>
        <Link>Home</Link>
        <Link>Projects</Link>
        <Link>Features</Link>
        <Link>Pricing</Link>
        <Link>Contact</Link>
      </Box>
    </HStack>
  );
};

export default Navbar;
