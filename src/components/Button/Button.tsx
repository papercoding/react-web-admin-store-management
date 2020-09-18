import React from 'react';
import { Button } from 'antd';
const ButtonComponent = ({ btnName, type }: { btnName: string; type: any }) => {
  return (
    <div>
      <Button block type={type} htmlType='submit'>
        {btnName}
      </Button>
    </div>
  );
};

export default ButtonComponent;
