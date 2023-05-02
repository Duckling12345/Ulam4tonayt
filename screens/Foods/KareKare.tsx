import React, { useState } from "react";
import SampleRecipePage from "./SampleRecipePage";
import Data from "./Data";
const KareKare = () => {
  return <SampleRecipePage recipes={Data[0].recipes[3]} />;
};

export default KareKare;
