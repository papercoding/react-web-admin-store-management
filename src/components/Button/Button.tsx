import React from "react";
import { Button as AntButton } from "antd";

interface IButton {
  label: string;
  type:
    | "text"
    | "link"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  htmlType: "button" | "submit" | "reset" | undefined;
  onChange: ((event: React.FormEvent<any>) => void) | undefined;
}

const Button: React.FC<IButton> = ({ label, type, onChange, htmlType }) => {
  return (
    <div>
      <AntButton block type={type} htmlType={htmlType} onChange={onChange}>
        {label}
      </AntButton>
    </div>
  );
};

export default Button;
