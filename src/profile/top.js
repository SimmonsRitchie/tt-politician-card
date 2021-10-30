import React from "react";
import PropTypes from "prop-types";
const Top = ({ imgSrc, headshotAlt, name, hometown }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-4">
      <div className="relative w-full h-28 mb-14 bg-gradient-to-br from-green-trib to-green-trib-light  flex justify-center items-center rounded-tr-lg rounded-tl-lg ">
        {imgSrc ? (
          <img
            className="absolute top-1/2 rounded-full w-24 h-24 ring-4 ring-gray-50
              border-white bg-gray-300"
            src={imgSrc}
            alt={headshotAlt}
          />
        ) : (
          // fallback: if no image, show a placeholder
          <img
            src="user-icon.png"
            alt="anonymous user icon"
            className="absolute top-1/2 rounded-full w-24 h-24 ring-4 ring-gray-50
            border-white bg-gray-300"
          />
        )}
      </div>
      <div className="px-11">
        <h4 className="text-gray-800 text-2xl text-center font-sans font-semibold">
          {name}
        </h4>
        <h5 className="text-gray-700 text-center">{hometown}</h5>
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
