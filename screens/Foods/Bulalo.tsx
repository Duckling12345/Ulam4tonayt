import React from "react";
import SampleRecipePage from "./SampleRecipePage";
import Data from "./Data";
const Bulalo = () => {
  return <SampleRecipePage recipes={Data[0].recipes[2]} />;
};

export default Bulalo;
