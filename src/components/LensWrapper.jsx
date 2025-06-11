import React, { useState } from "react";
import { Lens } from "../aceternityUi/lens";

function LensWrapper({ src, divClassName, className }) {
  const [hovering, setHovering] = useState(false);

  return (
    <Lens hovering={hovering} setHovering={setHovering}>
      <div className={divClassName}>
        <img src={src} alt="image" className={`rounded-2xl ${className}`} />
      </div>
    </Lens>
  );
}

export default LensWrapper;
