import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

const Create = () => {
  return (
    <Box maxW="480px" bg="gray.900">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task Name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for task..."
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="purple" />
          <FormLabel mb="0" ml="10px">
            Make this a priority task.
          </FormLabel>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
};

export default Create;

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  return redirect("/");
};
