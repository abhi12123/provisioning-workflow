import * as React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import {
  CheckboxChecked,
  CheckboxIndeterminate,
  Checkbox as CheckboxIcon,
} from "@carbon/icons-react";

interface CheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  indeterminate = false,
  onCheckedChange,
  label,
  className,
}) => {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        gap: 8,
      }}
      className={className}
    >
      <RadixCheckbox.Root
        checked={indeterminate ? "indeterminate" : checked}
        onCheckedChange={(state) => {
          if (state === "indeterminate") return; // ignore indeterminate changes
          onCheckedChange(state);
        }}
        style={{
          all: "unset",
          width: 20,
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          border: "1.5px solid #666",
          backgroundColor: checked || indeterminate ? "#0f62fe" : "transparent",
          boxSizing: "border-box",
        }}
      >
        {indeterminate ? (
          <CheckboxIndeterminate style={{ color: "white" }} />
        ) : checked ? (
          <CheckboxChecked style={{ color: "white" }} />
        ) : (
          <CheckboxIcon style={{ color: "transparent" }} />
        )}
      </RadixCheckbox.Root>

      {label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;
