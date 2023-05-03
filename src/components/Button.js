import React from "react";

function Button({ setShowButton }) {
  return (
    <div className="text-center">
      <div
        className="btn btn-primary my-button"
        onClick={() => {
          setShowButton(false);
        }}
      >
        <p style={{ fontSize: "22px", margin: 0, fontFamily: "Righteous" }}>
          Get Started
        </p>
      </div>
    </div>
  );
}

export default Button;
