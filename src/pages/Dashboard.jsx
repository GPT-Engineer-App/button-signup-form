import { Box, Button, Container, Flex, Heading, Text, VStack, SimpleGrid, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const FileCard = ({ title, description }) => (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="md" width="100%">
      <VStack spacing={2} align="start">
        <Icon as={FaFileAlt} w={6} h={6} />
        <Heading as="h3" size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </Box>
  );

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
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={4}>
        <FileCard title="File 1" description="This is a placeholder for file 1." />
        <FileCard title="File 2" description="This is a placeholder for file 2." />
        <FileCard title="File 3" description="This is a placeholder for file 3." />
        <FileCard title="File 4" description="This is a placeholder for file 4." />
        <FileCard title="File 5" description="This is a placeholder for file 5." />
        <FileCard title="File 6" description="This is a placeholder for file 6." />
      </SimpleGrid>
    </Container>
  );
};

export default Dashboard;