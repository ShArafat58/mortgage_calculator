import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  const bank_limit = 10000
  return (
    <div>
      <SliderComponent
        amount={3500}
        unit="$"
        defaultValue={3000}
        min={1000}
        max={bank_limit}
        steps={100}
        label="Home Value"
        onChange={(e) => console.log(e.target.value)}
      />
      <SliderComponent
        amount={3500}
        unit="$"
        defaultValue={3000}
        min={1000}
        max={10000}
        steps={100}
        label="Down Payment"
        onChange={(e) => console.log(e.target.value)}
      />
      <SliderComponent
        amount={3500}
        unit="$"
        defaultValue={3000}
        min={1000}
        max={10000}
        steps={100}
        label="Loan Amount"
        onChange={(e) => console.log(e.target.value)}
      />
      <SliderComponent
        amount={2}
        unit="%"
        defaultValue={2}
        min={2}
        max={18}
        steps={1}
        label="Interest Rate"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default SliderSelect;
