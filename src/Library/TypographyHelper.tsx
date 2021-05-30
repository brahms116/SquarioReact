import React from "react";
export interface ITypograhyHelperProps {
  textAlign?: "left" | "center" | "right";
}

interface IWithChildrenProps extends ITypograhyHelperProps {
  children: React.ReactNode;
}

const TypographyHelper = (props: IWithChildrenProps) => {
  let style = {};
  if (props.textAlign) {
    style = { textAlign: props.textAlign };
  }
  return <div style={style}>{props.children}</div>;
};

export default TypographyHelper;
