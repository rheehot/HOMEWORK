import React, { Component } from "react";
import PropTypes from "prop-types";

const ButtonChild02 = ({ title, color }) => {
  const ButtonStyle = {
    border: "none",
    width: 100,
    height: 30,
    background: color,
  };
  return <button style={ButtonStyle}>{title}</button>;
};

ButtonChild02.propTypes = {
  title: PropTypes.string,
};

export default ButtonChild02;
