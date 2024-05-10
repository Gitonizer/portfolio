import About from "./components/About";
import Layout from "./components/layout/Layout";
import classes from "./App.module.css";
import copy from "./copy.json";
import PastWork from "./components/PastWork";
import Skills from "./components/Skills";
import { useRef } from "react";

function App() {
  const {
    mainNavigation: {
      title: mainTitle,
      aboutMe: mainAboutMe,
      skills: mainSkills,
      pastWork: mainPastWork,
    },
    aboutMe: {
      title: aboutTitle,
      description: aboutDescription,
      topRegion: aboutTopRegion,
    },
    skills: {
      title: skillsTitle,
      description: skillsDescription,
      topRegion: skillsTopRegion,
    },
    pastWork: {
      title: pastWorkTitle,
      description: pastWorkDescription,
      topRegion: pastWorkTopRegion,
    },
    botRegion,
  } = copy;

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const pastWorkRef = useRef(null);

  return (
    <Layout
      title={mainTitle}
      aboutMe={mainAboutMe}
      skills={mainSkills}
      pastWork={mainPastWork}
    >
      <div className="wave" />
      <div className="wave" />
      <div className="wave" />
      <ul className={classes.ul}>
        <li ref={aboutRef} className={classes.li}>
          <About
            title={aboutTitle}
            description={aboutDescription}
            textTop={aboutTopRegion}
            textBot={botRegion}
            image={process.env.PUBLIC_URL + "/me.jpg"}
            region="#about"
            aboutRef={aboutRef}
          />
        </li>
        <li ref={skillsRef} className={classes.li}>
          <Skills
            title={skillsTitle}
            textTop={skillsTopRegion}
            textBot={botRegion}
            region="#skills"
            skillsRef={skillsRef}
          />
        </li>
        <li ref={pastWorkRef} className={classes.li}>
          <PastWork
            title={pastWorkTitle}
            textTop={pastWorkTopRegion}
            textBot={botRegion}
            region="#pastWork"
            pastWorkRef={pastWorkRef}
          />
        </li>
      </ul>
    </Layout>
  );
}

export default App;
