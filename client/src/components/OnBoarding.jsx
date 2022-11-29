import React from "react";

export const OnBoarding = () => {
  return (
    <div>
      <div className="pt-20 pl-10">
        <img
          className="absolute "
          src={require("../assets/title.png")}
          alt="title"
        />

        <img
          className="pt-20 absolute"
          src={require("../assets/resorte.png")}
          alt="title"
        />

        <img
          className="pt-2 "
          src={require("../assets/Saly-1.png")}
          alt="title"
        />
        <img src={require("../assets/ondulacion.png")} alt="title" />
      </div>
    </div>
  );
};
