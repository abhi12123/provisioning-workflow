// components/radio/RadioGroup.tsx
import * as React from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";

interface RadioGroupProps extends RadixRadioGroup.RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  name?: string;
  direction?: "row" | "column";
  spacing?: number;
  children?: React.ReactNode;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onValueChange,
  name,
  children,
  ...props
}) => {
  return (
    <RadixRadioGroup.Root
      value={value}
      onValueChange={onValueChange}
      name={name}
      {...props}
    >
      {children}
    </RadixRadioGroup.Root>
  );
};

export default RadioGroup;
