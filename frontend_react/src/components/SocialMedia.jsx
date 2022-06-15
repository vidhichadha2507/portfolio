import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/Vidhichadha25">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/vidhii25/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/vidhichadha2507">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;