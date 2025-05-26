// RadioButton.stories.tsx
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./index";
import RadioGroup from "../radio-group.tsx"; // Updated import path as needed

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <RadioButton {...args} />
      </RadioGroup>
    );
  },
  args: {
    label: "Option A",
    value: "option-a",
  },
};

export const WithMultipleOptions: Story = {
  render: () => {
    const [value, setValue] = useState("option-2");
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <RadioButton label="Option 1" value="option-1" />
        <RadioButton label="Option 2" value="option-2" />
        <RadioButton label="Option 3" value="option-3" />
      </RadioGroup>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [value, setValue] = useState("descriptive-option");
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <div>
          <RadioButton label="Descriptive Option" value="descriptive-option" />
          <p style={{ marginLeft: "24px", color: "#666", fontSize: "14px" }}>
            This option has a helper description below the label.
          </p>
        </div>
      </RadioGroup>
    );
  },
};
