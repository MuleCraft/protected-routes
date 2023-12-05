import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";
const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleSignOut = () => {
    console.log("User signed out");
    logout();
    navigate("/login");
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} direction="column">
      <Box
        borderWidth={1}
        px={4}
        width="md"
        borderRadius={8}
        boxShadow="lg"
        p={8}
      >
        <Box textAlign="center">
          <Heading>Welcome to the Home Page!</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <p>This is a simple home page for your application.</p>
          <Button
            width="full"
            mt={4}
            colorScheme="teal"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
