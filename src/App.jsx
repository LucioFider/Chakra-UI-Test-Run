import { Grid, GridItem } from "@chakra-ui/react";
import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Features,
} from "./components";

function App() {
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <Hero />
      <Features />
      <Projects />
      <Footer />
      <Contact />
    </Grid>
  );
}

export default App;
