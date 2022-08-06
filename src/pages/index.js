import { useState } from "react";
import AboutMe from "../components/About/AboutMe";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  //State for hero Animation
  const [startAnimation] = useState(true);

  //State for other sections Animation
  const [animateProjects, setAnimateProjects] = useState(false);

  //State for other sections Animation
  const [animateTechs, setAnimateTechs] = useState(false);
  const [animateAbout, setAnimateAbout] = useState(false);
  const [animateAcomplishments, setAnimateAcomplishments] = useState(false);

  return (
    <Layout>
      <Section grid>
        <Hero startAnimation={startAnimation} />
        <BgAnimation startAnimation={startAnimation} />
      </Section>
      <Projects
        animateProjects={animateProjects}
        setAnimateProjects={setAnimateProjects}
      />
      <Technologies
        animateTechs={animateTechs}
        setAnimateTechs={setAnimateTechs}
      />
      <AboutMe animateAbout={animateAbout} setAnimateAbout={setAnimateAbout} />
      <Acomplishments
        animateAcomplishments={animateAcomplishments}
        setAnimateAcomplishments={setAnimateAcomplishments}
      />
    </Layout>
  );
};

export default Home;
