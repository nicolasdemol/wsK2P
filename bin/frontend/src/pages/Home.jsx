import { Typography } from "@material-ui/core";
import { SimpleSection, ShapeSection } from "../components/Sections";
import green from "../images/green.jpg";

function Home() {
  return (
    <div>
      <ShapeSection image={green}>
        <Typography variant="h4">
          Bienvenue, vous êtes sur le Portail de Connexion K2 Process
        </Typography>
      </ShapeSection>
      <SimpleSection />
    </div>
  );
}

export default Home;
