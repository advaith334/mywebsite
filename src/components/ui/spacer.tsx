import React from 'react';

interface SpacerProps {
  size: string | number;
  axis?: 'vertical' | 'horizontal';
}

const Spacer = ({ size = "16px", axis = "vertical" }: SpacerProps) => {
  const style = {
    ...(axis === "vertical" ? { height: size, width: "100%" } : { width: size, height: "100%" }),
  };

  return <div style={style}></div>;
};

export default Spacer;
