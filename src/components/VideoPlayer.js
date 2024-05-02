import React from "react";
import ReactPlayer from "react-player";
import videos from "../videos.json";
import classes from "./VideoPlayer.module.css";
import Card from "./ui/Card";

function VideoPlayer(props) {
  // Render a YouTube video player
  return (
    <Card textTop={props.textTop} textBot={props.textBot} region={props.region} propRef={props.pastWorkRef}>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <ul>
        {videos.map((video) => {
          return (
            <li key={video.id} className="player-wrapper">
              <ReactPlayer url={video.url} className="react-player" width="100%" height="100%"/>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default VideoPlayer;
