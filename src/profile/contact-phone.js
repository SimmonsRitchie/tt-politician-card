import React from "react";

const ContactPhone = ({ distPhone, capPhone, capAddress, distAddress }) => {
  const VITALS = [
    { label: "Capitol", value: capPhone },
    { label: "District", value: distPhone },
    { label: "Mailing", value: capAddress },
  ];

  return (
    <div className="w-full flex flex-col gap-y-3 mb-6">
      {VITALS.map(({ label, value }) => {
        if (!value) {
          return null;
        }
        return (
          <div key={label}>
            <p className="text-gray-700 text-xs mb-1 uppercase">{label}</p>
            <p className="text-gray-900">{value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactPhone;
