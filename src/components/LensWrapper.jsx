import React, { useState } from "react";
import { Lens } from "../aceternityUi/lens";

function LensWrapper({ src, className }) {
  const [hovering, setHovering] = useState(false);

  return (
    <Lens hovering={hovering} setHovering={setHovering}>
      <img src={src} alt="image" className={`rounded-2xl ${className}`} />
    </Lens>
  );
}

export default LensWrapper;
