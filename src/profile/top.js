import React from "react";
import PropTypes from "prop-types";

const Top = ({ imgSrc, headshotAlt, name, hometown }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        className="rounded-full w-24 border-2
               mb-4 border-white ring-2 ring-green-trib"
        src={imgSrc}
        alt={headshotAlt}
      />
      <div className="mb-5">
        <h3 className="text-gray-800 text-2xl text-center font-sans font-semibold">
          {name}
        </h3>
        <h5 className="text-gray-500 text-center">{hometown}</h5>
      </div>
    </div>
  );
};

Top.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  headshotAlt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hometown: PropTypes.string.isRequired,
};

export default Top;
