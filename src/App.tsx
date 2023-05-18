// Imports libraries
import { useQuery } from "react-query";

// Imports components
import { ThreeDModel } from "./canvas";
import { Index } from "./pages";
import { Customizer } from "./pages/Customizer";

// Imports styles
import { Container, TwoColumnedMarkup } from "./shared/styled";

// Imports utils
import { state } from "./store";

function App() {
  useQuery({
    queryKey: ["fetch collection"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/api/v1/collection/");
      const data = await response.json();
      state.collection = data.decals;
    },
  });

  return (
    <main>
      <Container>
        <TwoColumnedMarkup>
          <Index />
          <ThreeDModel />
        </TwoColumnedMarkup>
      </Container>
      <Customizer />
    </main>
  );
}

export default App;
