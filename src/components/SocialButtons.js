import React from "react";

function SocialButtons() {
  return (
    <div className="flex pt-5 space-x-5 ">
      <a
        href="#"
        target="_blank"
        className="socialLink hover:animate-pulse hover:shadow-md ease-in-out bg-custom-lightGray"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
          alt="John Doe"
          className=""
        />
      </a>
      <a
        href="#"
        target="_blank"
        className="socialLink hover:animate-pulse hover:shadow-md ease-in-out bg-custom-lightGray"
      >
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
          alt="John Doe"
          className=""
        />
      </a>
      <a
        href="#"
        target="_blank"
        className="socialLink hover:animate-pulse hover:shadow-md ease-in-out bg-custom-lightGray"
      >
        <img
          src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
          alt="John Doe"
          className=""
        />
      </a>
    </div>
  );
}

export default SocialButtons;
