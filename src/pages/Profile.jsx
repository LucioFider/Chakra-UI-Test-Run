import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Tabs
      mt="40px"
      p="20px"
      color="gray.600"
      colorScheme="purple"
      variant="enclosed"
    >
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email:mario@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              nulla, eveniet illo accusamus fugiat sed ullam ea quisquam.
              Officiis asperiores quos nihil doloremque exercitationem
              consequatur sit quisquam provident et dolor.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Incidunt, voluptates voluptatibus! Nulla magni iusto adipisci
              soluta ex, quibusdam omnis officia exercitationem maiores natus
              autem aliquid? Voluptatem delectus dolorum aspernatur atque.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="teal.400" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="teal.400" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="teal.400" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Profile;
