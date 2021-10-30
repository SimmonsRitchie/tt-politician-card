import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faFlag } from "@fortawesome/free-solid-svg-icons/faFlag";


const ContactWeb = ({ webOfficial, webPersonal }) => {
  const CONTACT_BUTTONS = [
    { label: "Official website", value: webOfficial, icon: faUser },
    { label: "Personal website", value: webPersonal, icon: faFlag },
  ];
  return (
    <div className="w-full flex flex-col gap-3">
      {CONTACT_BUTTONS.map(({ label, value, icon }) => {
        if (!value) {
          return null;
        }
        return (
          <a
            key={label}
            href={value}
            target="_blank"
            rel="noreferrer nofollower"
          >
            <button className="rounded w-full  uppercase text-xs font-bold px-4 py-3 text-white bg-green-trib hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <FontAwesomeIcon icon={icon} className="mr-2" /> {label}
            </button>
          </a>
        );
      })}
    </div>
  );
};

export default ContactWeb;
