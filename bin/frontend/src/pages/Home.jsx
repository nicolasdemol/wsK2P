import { Typography } from "@material-ui/core";
import { SimpleSection, ShapeSection } from "../components/Sections";
import green from "../images/green.jpg";

function Home() {
  return (
    <div>
      <ShapeSection image={green}>
        <Typography variant="h3">Hello I am a server</Typography>
      </ShapeSection>
      <SimpleSection />
    </div>
  );
}

export default Home;
