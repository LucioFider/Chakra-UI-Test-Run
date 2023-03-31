import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Dashboard = () => {
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
  };
  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading marginY="30px" p="10px">
        Chakra UI Component
      </Heading>
      <Text ml="30px">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        itaque esse odio ut dolore, ea nostrum velit distinctio non quasi
        aliquam adipisci repellat natus. Sapiente dignissimos accusamus magnam
        ab. Tempore. z
      </Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        dolor blanditiis deserunt cum error minima, molestiae officiis debitis
        dolore? Dignissimos eius quidem assumenda ab excepturi tenetur
        aspernatur blanditiis ratione accusantium!
      </Text>
      <Box my="30px" p="20px" bg="orange">
        <Text>This is box </Text>
      </Box>

      <Box sx={boxStyles}>Hello Ninjas</Box>
    </Container>
  );
};

export default Dashboard;
