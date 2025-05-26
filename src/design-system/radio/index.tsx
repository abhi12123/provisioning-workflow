import * as React from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import {
  RadioButtonChecked,
  RadioButton as RadioButtonIcon,
} from "@carbon/icons-react";
import Label from "../label";

interface RadioButtonProps
  extends React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item> {
  label?: string;
  labelDescription?: string;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  labelDescription,
  value,
  ...props
}) => {
  return (
    <>
      <div className="radio-wrapper">
        <RadixRadioGroup.Item
          className="radio-item"
          value={value}
          id={value}
          {...props}
        >
          <RadioButtonIcon className="unchecked-icon" />
          <RadixRadioGroup.Indicator className="checked-indicator">
            <RadioButtonChecked />
          </RadixRadioGroup.Indicator>
        </RadixRadioGroup.Item>
        <Label htmlFor={value}>{label}</Label>
      </div>
      <style jsx>{`
        .radio-wrapper {
          display: flex;
          align-items: center;
          gap: var(--spacing-regular);
        }

        .radio-item {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
        }

        .unchecked-icon,
        .checked-indicator {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default RadioButton;
