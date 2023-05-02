import React, { useState } from "react";
import SampleRecipePage from "./SampleRecipePage";
import Data from "./Data";
const Sinigang = () => {
  return <SampleRecipePage recipes={Data[0].recipes[1]} />;
};

export default Sinigang;
