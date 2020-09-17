import React from "react";

interface IExampleComponentProps {
  title: string;
}

const ExampleComponent: React.FC<IExampleComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default ExampleComponent;
