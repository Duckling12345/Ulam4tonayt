import React, { useState } from "react";
import SampleRecipePage from "./SampleRecipePage";
import Data from "./Data";
const Kaldereta = () => {
  return <SampleRecipePage recipes={Data[0].recipes[7]} />;
};

export default Kaldereta;
