import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <IoDocumentTextSharp />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  );
};

export default SocialMedia;
