import TextImageItem from "./components/TextImageItem";
import Layout from "./components/layout/Layout";
import classes from "./App.module.css";
import copy from "./copy.json";
import VideoPlayer from "./components/VideoPlayer";
import Skills from "./components/Skills";

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
        <li className={classes.li}>
          <TextImageItem
            title={aboutTitle}
            description={aboutDescription}
            textTop={aboutTopRegion}
            textBot={botRegion}
            image={process.env.PUBLIC_URL + "/photo_portfolio.png"}
            region="#about"
          ></TextImageItem>
        </li>
        <li className={classes.li}>
          <Skills
            title={skillsTitle}
            textTop={skillsTopRegion}
            textBot={botRegion}
            region="#skills"
          />
        </li>
        <li className={classes.li}>
          <VideoPlayer
            title={pastWorkTitle}
            textTop={pastWorkTopRegion}
            textBot={botRegion}
            region="#pastWork"
          />
        </li>
      </ul>
    </Layout>
  );
}

export default App;
