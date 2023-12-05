import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword()) {
      console.log("Login successful");
      login("dummyToken");
      navigate("/home");
    }
  };
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Box
        borderWidth={1}
        px={4}
        width="md"
        borderRadius={8}
        boxShadow="lg"
        p={8}
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={!!emailError}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              <FormErrorMessage>{emailError}</FormErrorMessage>
            </FormControl>
            <FormControl mt={6} isInvalid={!!passwordError}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              <FormErrorMessage>{passwordError}</FormErrorMessage>
            </FormControl>
            <Button
              width="full"
              mt={4}
              colorScheme="teal"
              type="submit"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginForm;
