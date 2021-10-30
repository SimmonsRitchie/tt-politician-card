import React from "react";
import PropTypes from "prop-types";

const ContactSocial = ({ capEmail, facebook, twitter }) => {
  const CONTACT_BUTTONS = [
    {
      label: "Email",
      value: capEmail,
      linkFormatter: (value) => `mailto:${value}`,
    },
    {
      label: "Facebook",
      value: facebook,
      linkFormatter: (value) => `https://www.facebook.com/${value}`,
    },
    {
      label: "Twitter",
      value: twitter,
      linkFormatter: (value) => `https://twitter.com/${value}`,
    },
  ];
  return (
    <div className="w-full mb-4 flex justify-between items-center px-6 ">
      {CONTACT_BUTTONS.map(({ label, value, linkFormatter }) => {
        if (!value) {
          return null;
        }
        const cleanUrl = linkFormatter(value);
        return (
          <a key={label} href={cleanUrl} className="text-gray-600 text-sm mr-4">
            {label}
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
