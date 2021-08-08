import React from "react";

export default function ProgressBar(props) {
  const { percentage, style } = props;
  return (
    <div className="progress" style={style}>
      <div
        className="progress-bar bg-info"
        role="progressbar"
        style={{ width: `${percentage}%`}}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
