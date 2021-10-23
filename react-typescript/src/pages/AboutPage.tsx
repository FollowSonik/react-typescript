import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Page Information</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quasi tempora nobis delectus similique itaque corrupti. Qui corporis sed illum.</p>
      <button className="btn" onClick={() => history.push("/")}>Back to the Todos</button>
    </>
  );
};