import React from "react";

function Greet() {
  const hours = new Date().getHours();

  let greetMsg;

  if (hours < 12) greetMsg = "Morning";
  else if (hours < 16) greetMsg = "Afternoon";
  else greetMsg = "Evening";

  return (
    <div className="greet">
      <h1 className="GM_greet_heading">Good {greetMsg}</h1>
    </div>
  );
}

export default Greet;
