import React, { useState } from "react";
import SampleRecipePage from "./SampleRecipePage";
import Data from "./Data";
const Tinola = () => {
  return <SampleRecipePage recipes={Data[0].recipes[6]} />;
};

export default Tinola;
