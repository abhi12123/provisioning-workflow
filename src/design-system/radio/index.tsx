// components/radio/RadioButton.tsx
import * as React from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import {
  RadioButtonChecked,
  RadioButton as RadioButtonIcon,
} from "@carbon/icons-react";

interface RadioButtonProps
  extends React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item> {
  label: string;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
      }}
    >
      <RadixRadioGroup.Item
        value={value}
        id={value}
        style={{
          all: "unset",
          width: 20,
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        {...props}
      >
        <RadixRadioGroup.Indicator>
          <RadioButtonChecked style={{ color: "#0f62fe" }} />
        </RadixRadioGroup.Indicator>
        {!props.checked && <RadioButtonIcon style={{ color: "#8d8d8d" }} />}
      </RadixRadioGroup.Item>
      <label htmlFor={value} style={{ userSelect: "none" }}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
