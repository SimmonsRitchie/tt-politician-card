import React from "react";

const Vitals = ({ age, occupation, phone }) => {
  const VITALS = [
    { label: "Age", value: age },
    { label: "Occupation", value: occupation },
    { label: "Capitol phone", value: phone },
  ];

  return (
    <div className="w-full flex flex-col gap-y-3 mb-4">
      {VITALS.map(({ label, value }) => (
        <div key={label}>
          <p className="text-gray-400 text-xs mb-1">{label}</p>
          <p className="text-gray-800">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Vitals;
