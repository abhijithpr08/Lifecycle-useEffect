import React, { useLayoutEffect } from "react";

const LayoutEffectExample = () => {
  useLayoutEffect(() => {
    console.log("Runs before paint");
  }, []);

  return (
    <div>
      LayoutEffectExample
    </div>
  );
};

export default LayoutEffectExample;
