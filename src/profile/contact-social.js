import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const ContactSocial = ({ capEmail, facebook, twitter }) => {
  const CONTACT_BUTTONS = [
    {
      label: "Email",
      value: capEmail,
      linkFormatter: (value) => `mailto:${value}`,
      icon: faEnvelope,
    },
    {
      label: "Facebook",
      value: facebook,
      linkFormatter: (value) => `https://www.facebook.com/${value}`,
      icon: faFacebook,
    },
    {
      label: "Twitter",
      value: twitter,
      linkFormatter: (value) => `https://twitter.com/${value}`,
      icon: faTwitter,
    },
  ];
  return (
    <div className="w-full mb-4 flex gap-x-6 justify-center items-center ">
      {CONTACT_BUTTONS.map(({ label, value, icon, linkFormatter }) => {
        if (!value) {
          return null;
        }
        const cleanUrl = linkFormatter(value);
        return (
          <a
            key={label}
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
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
