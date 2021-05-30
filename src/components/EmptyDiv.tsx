import React from "react";
import LayoutHelper, { ILayoutHelperProps } from "../Library/LayoutHelper";

interface IEmptyDivProps extends ILayoutHelperProps {}
const EmptyDiv = (props: IEmptyDivProps) => {
  return (
    <LayoutHelper {...props}>
      <div />
    </LayoutHelper>
  );
};

export default EmptyDiv;
