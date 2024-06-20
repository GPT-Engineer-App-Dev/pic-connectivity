import { Box, Container, VStack, Heading, Text, Image, Flex, Button, Input } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }
    // Implement the file upload logic here
    console.log("Uploading file:", selectedFile);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Header */}
        <Box as="header" bg="brand.700" color="white" py={4}>
          <Container maxW="container.xl">
            <Heading as="h1" size="lg" textAlign="center">
              PhotoShare
            </Heading>
          </Container>
        </Box>

        {/* Main Content */}
        <Box as="main" flex="1" py={8}>
          <Container maxW="container.md">
            <VStack spacing={8}>
              <Heading as="h2" size="md">
                Welcome to PhotoShare!
              </Heading>
              <Text fontSize="lg" textAlign="center">
                Share your favorite moments with the world.
              </Text>
              <Input type="file" onChange={handleFileChange} />
              <Button onClick={handleUpload} colorScheme="blue" leftIcon={<FaCamera />}>
                Upload Photo
              </Button>
              <Image src="/images/sample-photo.jpg" alt="Sample Photo" borderRadius="md" />
            </VStack>
          </Container>
        </Box>

        {/* Footer */}
        <Box as="footer" bg="brand.700" color="white" py={4}>
          <Container maxW="container.xl" textAlign="center">
            <Text>&copy; 2023 PhotoShare. All rights reserved.</Text>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;