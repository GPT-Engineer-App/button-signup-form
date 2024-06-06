import { Box, Button, Container, Flex, Heading, Text, VStack, SimpleGrid, Icon, HStack, Table, Thead, Tbody, Tr, Th, Td, Divider, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaStar, FaFolder, FaSearch } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/home");
  };

  const FileCard = ({ title, description }) => (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="md" width="100%">
      <VStack spacing={2} align="start">
        <Icon as={FaFolder} w={6} h={6} />
        <Heading as="h3" size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </Box>
  );

  return (
    <Flex>
      <Box w="20%" bg="blue.900" color="white" p={4}>
        <Heading as="h2" size="md" mb={4}>Cloud Storage</Heading>
        <VStack align="start" spacing={4}>
          <Button variant="link" colorScheme="whiteAlpha" leftIcon={<FaFolder />}>All Files</Button>
          <Button variant="link" colorScheme="whiteAlpha" leftIcon={<FaStar />}>Favorite</Button>
          <Button variant="link" colorScheme="whiteAlpha">Recents</Button>
          <Button variant="link" colorScheme="whiteAlpha">Shared with me</Button>
          <Button variant="link" colorScheme="whiteAlpha">Deleted files</Button>
          <Button variant="link" colorScheme="whiteAlpha">Settings</Button>
          <Button colorScheme="blue" mt={4}>+ Create new</Button>
        </VStack>
      </Box>
      <Box w="80%" p={4}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading as="h1" size="lg">Welcome back, User</Heading>
          <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
        </Flex>
        <Input placeholder="Type to search..." mb={4} />
        <Divider mb={4} />
        <Heading as="h2" size="md" mb={4}>All Files</Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={4}>
          <FileCard title="My Files" description="Personal files" />
          <FileCard title="Team Folder" description="Team collaboration" />
          <FileCard title="References" description="Reference materials" />
          <FileCard title="Documents" description="Important documents" />
        </SimpleGrid>
        <Heading as="h2" size="md" mb={4}>Favorite</Heading>
        <Table variant="simple" mb={4}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>File size</Th>
              <Th>Last modified</Th>
              <Th>Owner name</Th>
              <Th>Who can access</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><HStack><Icon as={FaStar} color="yellow.400" /><Text>Budget Trip.xlsx</Text></HStack></Td>
              <Td>3.6 MB</Td>
              <Td>18/05/2023 6:27 AM</Td>
              <Td>Me</Td>
              <Td>Only me</Td>
            </Tr>
            <Tr>
              <Td><HStack><Icon as={FaStar} color="yellow.400" /><Text>Website Code.zip</Text></HStack></Td>
              <Td>12 KB</Td>
              <Td>19/05/2023 3:45 PM</Td>
              <Td>Hilya Nur</Td>
              <Td>Anyone with the link</Td>
            </Tr>
          </Tbody>
        </Table>
        <Heading as="h2" size="md" mb={4}>Recents</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>File size</Th>
              <Th>Last modified</Th>
              <Th>Owner name</Th>
              <Th>Who can access</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><HStack><Icon as={FaFileAlt} color="blue.400" /><Text>Design Brief.docx</Text></HStack></Td>
              <Td>7.2 MB</Td>
              <Td>10/07/2023 3:16 PM</Td>
              <Td>Sandy Fauzi</Td>
              <Td>Anyone with the link</Td>
            </Tr>
            <Tr>
              <Td><HStack><Icon as={FaFileAlt} color="blue.400" /><Text>Ciwidey Trip.mp4</Text></HStack></Td>
              <Td>1.2 GB</Td>
              <Td>18/05/2023 7:18 AM</Td>
              <Td>Yahya Adam</Td>
              <Td>Specific users</Td>
            </Tr>
            <Tr>
              <Td><HStack><Icon as={FaFileAlt} color="blue.400" /><Text>Demo Apps.pptx</Text></HStack></Td>
              <Td>8.6 MB</Td>
              <Td>29/04/2023 6:27 AM</Td>
              <Td>Ihsan Al Ghifar</Td>
              <Td>Anyone with the link</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Dashboard;