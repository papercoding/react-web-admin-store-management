import React from "react";
import { Badge, Button, Popover } from "antd";
import { RenderFunction } from "antd/lib/tooltip";
import "./PopoverButton.scss";

interface IProps {
  placement?:
    | "bottomRight"
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom"
    | undefined;
  popoverTitle?: string;
  badgeCount?: number;
  popoverContent?: string | number | boolean | React.ReactNode | RenderFunction;
  showBadge?: boolean;
  children?: React.ReactNode;
}

const PopoverButton: React.FC<IProps> = ({
  placement,
  popoverTitle,
  popoverContent,
  badgeCount,
  children,
  showBadge,
}) => {
  return (
    <Popover
      placement={placement}
      title={popoverTitle}
      content={popoverContent}
      arrowPointAtCenter={false}
      trigger="click"
    >
      <Button type="text">
        {showBadge ? (
          <Badge offset={[6, -4]} overflowCount={99} count={badgeCount}>
            {children}
          </Badge>
        ) : (
          children
        )}
      </Button>
    </Popover>
  );
};

export default PopoverButton;
