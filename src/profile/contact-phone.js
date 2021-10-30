import React from "react";

const ContactPhone = ({ distPhone, capPhone, capAddress, distAddress }) => {
  const VITALS = [
    { label: "Capitol phone", value: capPhone },
    { label: "District phone", value: distPhone },
    { label: "Mailing address", value: capAddress },
  ];

  return (
    <div className="w-full flex flex-col gap-y-3 mb-6">
      {VITALS.map(({ label, value }) => (
        <div key={label}>
          <p className="text-gray-400 text-xs mb-1">{label}</p>
          <p className="text-gray-800">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactPhone;
