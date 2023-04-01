import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" color="black">
        Solo Tasks
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px" color="black" borderRadius="20px">
          M
        </Box>
        <Text>john@gmm.dev</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" flexGrow="1" bg="green">
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" flexGrow="2" bg="yellow">
    //     4
    //   </Box>
    // </Flex>
  );
}
