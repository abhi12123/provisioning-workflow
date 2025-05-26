import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// ✅ Stateful Unchecked
export const Unchecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        label="Unchecked"
        id="unchecked"
        checked={checked}
        onCheckedChange={setChecked}
      />
    );
  },
};

// ✅ Stateful Checked
export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    return (
      <Checkbox
        label="Checked"
        id="checked"
        checked={checked}
        onCheckedChange={setChecked}
      />
    );
  },
};

// ✅ Stateful Indeterminate
export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);

    const toggle = (val: boolean) => {
      setIndeterminate(false);
      setChecked(val);
    };

    return (
      <Checkbox
        label="Indeterminate"
        id="indeterminate"
        checked={checked}
        indeterminate={indeterminate}
        onCheckedChange={toggle}
      />
    );
  },
};

// ✅ Checkbox Group with Parent Control
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
          id="parent"
          checked={parentChecked}
          indeterminate={parentIndeterminate}
          onCheckedChange={onParentChange}
        />
        <div style={{ paddingLeft: 20, marginTop: 8 }}>
          {childrenChecked.map((checked, i) => (
            <Checkbox
              key={i}
              label={`Child ${i + 1}`}
              id={`child-${i}`}
              checked={checked}
              onCheckedChange={(val) => onChildChange(i, val)}
            />
          ))}
        </div>
      </div>
    );
  },
};
