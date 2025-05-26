import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    indeterminate: {
      control: { type: "boolean" },
    },
    label: { control: "text" },
    onCheckedChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    label: "Unchecked",
    checked: false,
    indeterminate: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Checked",
    checked: true,
    indeterminate: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate",
    checked: false, // checked must be boolean
    indeterminate: true,
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [parentChecked, setParentChecked] = useState(false);
    const [parentIndeterminate, setParentIndeterminate] = useState(false);
    const [childrenChecked, setChildrenChecked] = useState([
      false,
      false,
      false,
    ]);

    useEffect(() => {
      const allChecked = childrenChecked.every(Boolean);
      const noneChecked = childrenChecked.every((v) => !v);

      setParentChecked(allChecked);
      setParentIndeterminate(!allChecked && !noneChecked);
    }, [childrenChecked]);

    const onParentChange = (checked: boolean) => {
      setParentChecked(checked);
      setParentIndeterminate(false);
      setChildrenChecked(childrenChecked.map(() => checked));
    };

    const onChildChange = (index: number, checked: boolean) => {
      const newChildren = [...childrenChecked];
      newChildren[index] = checked;
      setChildrenChecked(newChildren);
    };

    return (
      <div>
        <Checkbox
          label="Parent"
          checked={parentChecked}
          indeterminate={parentIndeterminate}
          onCheckedChange={onParentChange}
        />
        <div style={{ paddingLeft: 20, marginTop: 8 }}>
          {childrenChecked.map((checked, i) => (
            <Checkbox
              key={i}
              label={`Child ${i + 1}`}
              checked={checked}
              indeterminate={false}
              onCheckedChange={(checked) => onChildChange(i, checked)}
            />
          ))}
        </div>
      </div>
    );
  },
};
