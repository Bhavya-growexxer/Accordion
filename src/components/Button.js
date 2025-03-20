import React from "react";
import PropTypes from "prop-types";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-600 bg-blue-500 text-white": primary,
      "border-gray-600 bg-gray-500 text-white": secondary,
      "border-green-600 bg-green-500 text-white": success,
      "border-yellow-600 bg-yellow-500 text-white": warning,
      "border-red-600 bg-red-500 text-white": danger,
      "border-blue-600 text-blue-500": outline,
      "rounded-full": rounded,
    }
  );
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!outline) +
      Number(!!rounded);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary,success, warngn,danger can be true"
      );
    }
  },
};
export default Button;
