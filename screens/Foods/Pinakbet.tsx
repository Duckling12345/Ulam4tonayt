import React, { useState } from "react";
import SampleRecipePage from "./SampleRecipePage";
import Data from "./Data";
const Pinakbet = () => {
  return <SampleRecipePage recipes={Data[0].recipes[5]} />;
};

export default Pinakbet;
