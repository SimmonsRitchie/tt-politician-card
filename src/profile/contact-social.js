import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const ContactSocial = ({ capEmail, facebook, twitter }) => {
  const CONTACT_BUTTONS = [
    {
      id: "Email",
      value: capEmail,
      linkFormatter: (value) => `mailto:${value}`,
      icon: faEnvelope,
      alt: "envelope icon"
    },
    {
      id: "Facebook",
      value: facebook,
      linkFormatter: (value) => `https://www.facebook.com/${value}`,
      icon: faFacebook,
      alt: "Facebook logo"

    },
    {
      id: "Twitter",
      value: twitter,
      linkFormatter: (value) => `https://twitter.com/${value}`,
      icon: faTwitter,
      alt: "Twitter logo"

    },
  ];
  return (
    <div className="w-full mb-6 flex gap-x-6 justify-center items-center ">
      {CONTACT_BUTTONS.map(({ id, value, icon, alt, linkFormatter }) => {
        if (!value) {
          return null;
        }
        const cleanUrl = linkFormatter(value);
        return (
          <a
            key={id}
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
            alt={alt}
              className="text-xl text-center text-green-trib hover:text-opacity-60 transition-all duration-300"
              icon={icon}
            />
          </a>
        );
      })}
    </div>
  );
};

ContactSocial.propTypes = {
  capEmail: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
};

export default ContactSocial;
