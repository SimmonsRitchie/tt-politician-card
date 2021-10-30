import React from "react";

const ContactWeb = ({ webOfficial, webPersonal, capEmail, facebook, twitter }) => {
  const CONTACT_BUTTONS = [
    { label: "Email", value: capEmail },
    { label: "Facebook", value: facebook },
    { label: "Twitter", value: twitter },
    { label: "Official website", value: webOfficial },
    { label: "Personal website", value: webPersonal },
  ];
  return (
    <div className="w-full flex flex-col gap-2">
      {CONTACT_BUTTONS.map(({ label, value }) => {
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
            <button className="rounded w-full text-center uppercase text-xs font-semibold px-4 py-2 text-white bg-green-trib">
              {label}
            </button>
          </a>
        );
      })}
    </div>
  );
};

export default ContactWeb;
