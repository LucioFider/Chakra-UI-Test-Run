import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <SimpleGrid spacing={10} minChildWidth="250px" p="10px">
      <Box bg="white" height="200px" border="1px solid black">
        <Text color={{ base: "pink", md: "blue", lg: "green" }}>Hello</Text>
      </Box>
      <Box bg="white" height="200px" border="1px solid black"></Box>
      <Box bg="white" height="200px" border="1px solid black"></Box>
      <Box bg="white" height="200px" border="1px solid black"></Box>

      <Box bg="white" height="200px" border="1px solid black"></Box>
      <Box bg="white" height="200px" border="1px solid black"></Box>
      <Box bg="white" height="200px" border="1px solid black"></Box>
      <Box bg="white" height="200px" border="1px solid black"></Box>

      <Box bg="white" height="200px" border="1px solid black"></Box>
      <Box bg="white" height="200px" border="1px solid black"></Box>
      <Box bg="white" height="200px" border="1px solid black"></Box>
      <Box bg="white" height="200px" border="1px solid black"></Box>
    </SimpleGrid>
  );
};

export default Dashboard;
