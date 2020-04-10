import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

const Repo = () => {
  const linkStyles = {
    fontWeight: "bolder",
    letterSpacing: "2px",
    marginLeft: "10px"
  };
  return (
    <div className="repoIcon" style={linkStyles}>
      <a href="https://github.com/stevie2codes/Animade">
        <GitHubIcon fontSize="large" />
        ANIMADE
      </a>
    </div>
  );
};

export default Repo;
