import React from "react";
export interface ILayoutHelperProps {
  width?: string;
  height?: string;
  flexGrow?: string;
  flexShrink?: string;
  justifySelf?: string;
  alignSelf?: string;
  gridArea?: string;
  position?: "absolute" | "relative";
  left?: string;
  top?: string;
}
interface IWithChildrenProps extends ILayoutHelperProps {
  children: React.ReactNode;
}

const LayoutHelper = (props: IWithChildrenProps) => {
  let style = {};
  if (props.width) {
    style = { ...style, ...{ width: props.width } };
  }
  if (props.height) {
    style = { ...style, ...{ height: props.height } };
  }
  if (props.flexGrow) {
    style = { ...style, ...{ flexGrow: props.flexGrow } };
  }
  if (props.flexShrink) {
    style = { ...style, ...{ flexShrink: props.flexShrink } };
  }
  if (props.justifySelf) {
    style = { ...style, ...{ justifySelf: props.justifySelf } };
  }
  if (props.alignSelf) {
    style = { ...style, ...{ alignSelf: props.alignSelf } };
  }
  if (props.gridArea) {
    style = { ...style, ...{ gridArea: props.gridArea } };
  }
  if (props.position) {
    style = { ...style, ...{ position: props.position } };
  }
  if (props.left) {
    style = { ...style, ...{ left: props.left } };
  }
  if (props.top) {
    style = { ...style, ...{ top: props.top } };
  }

  return <div style={style}>{props.children}</div>;
};

export default LayoutHelper;
