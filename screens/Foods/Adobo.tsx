import React, { useState } from "react";
import SampleRecipePage from "./SampleRecipePage";
import Data from "./Data";
const Adobo = () => {
  return <SampleRecipePage recipes={Data[0].recipes[0]} />;
};

export default Adobo;
