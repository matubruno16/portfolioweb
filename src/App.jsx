import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Proyects } from "./components/Proyects";
import { Services } from "./components/Services";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource-variable/oswald';


function App() {
  return (
    <main className="min-h-dvh min-w-full">
      <Analytics />
      <SpeedInsights/>
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
