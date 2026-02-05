import React from "react";

function ErrorState({ message }) {
  return (
    <div className="text-center text-red-500 py-10">
      {message || "Something went wrong. Please try again."}
    </div>
  );
}

export default ErrorState;
