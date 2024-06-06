import { Box, Button, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="lg">Dashboard</Heading>
        <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
      </Flex>
      <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to your Dashboard</Text>
          <Text>This is a placeholder for your dashboard content.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Dashboard;