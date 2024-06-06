import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Mock login validation
    if (email === "test" && password === "test") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Text fontSize="2xl">Login</Text>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" width="full" onClick={handleLogin}>Login</Button>
          <Button variant="link" onClick={handleSignUpClick}>Sign Up</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;