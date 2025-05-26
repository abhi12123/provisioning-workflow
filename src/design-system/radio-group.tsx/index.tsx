// components/radio/RadioGroup.tsx
import * as React from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import RadioButton from "../radio";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  options: RadioOption[];
  name?: string;
  direction?: "row" | "column";
  spacing?: number;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onValueChange,
  options,
  name,
  direction = "column",
  spacing = 12,
}) => {
  return (
    <RadixRadioGroup.Root
      value={value}
      onValueChange={onValueChange}
      name={name}
      style={{
        display: "flex",
        flexDirection: direction,
        gap: spacing,
      }}
    >
      {options.map((opt) => (
        <RadioButton key={opt.value} label={opt.label} value={opt.value} />
      ))}
    </RadixRadioGroup.Root>
  );
};

export default RadioGroup;
