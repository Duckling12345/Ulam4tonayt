import React, { useState } from "react";
import SampleRecipePage from "./SampleRecipePage";
import Data from "./Data";
const Sisig = () => {
  return <SampleRecipePage recipes={Data[0].recipes[4]} />;
};

export default Sisig;
