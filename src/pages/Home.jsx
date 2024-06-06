import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="xl">Welcome Home</Heading>
          <Text fontSize="lg">This is the home page. Feel free to explore!</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Home;