import React from 'react';
import { Button } from 'antd';
const ButtonComponent = ({
  btnName,
  type,
  onChange,
  htmlType,
}: {
  btnName: string;
  type:
    | 'text'
    | 'link'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined;
  htmlType: 'button' | 'submit' | 'reset' | undefined;
  onChange: ((event: React.FormEvent<any>) => void) | undefined;
}) => {
  return (
    <div>
      <Button block type={type} htmlType={htmlType} onChange={onChange}>
        {btnName}
      </Button>
    </div>
  );
};

export default ButtonComponent;
