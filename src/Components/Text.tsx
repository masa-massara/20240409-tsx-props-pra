import React from "react";

type textProps = { children: string };

const Text = (props: textProps) => {
  return <div>{props.children}</div>;
};

export default Text;
