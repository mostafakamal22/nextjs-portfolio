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
  //State for Animation
  const [startAnimation] = useState(true);

  return (
    <Layout>
      <Section grid>
        <Hero startAnimation={startAnimation} />
        <BgAnimation startAnimation={startAnimation} />
      </Section>
      <Projects startAnimation={startAnimation} />
      <Technologies startAnimation={startAnimation} />
      <AboutMe startAnimation={startAnimation} />
      <Acomplishments startAnimation={startAnimation} />
    </Layout>
  );
};

export default Home;
