import { About } from "./Components/About";
import { Certifications } from "./Components/Certifications";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { Proyects } from "./Components/Proyects";
import { Services } from "./Components/Services";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource-variable/oswald';


function App() {
  return (
    <main className="min-h-dvh min-w-full">
      <NavBar />
      <Home />
      <About />
      <Proyects />
      <Certifications />
      <Services />
      <Contact />
    </main>
  );
}

export default App;
