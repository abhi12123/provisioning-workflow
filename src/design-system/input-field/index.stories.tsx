import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./index";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
  },
};

export const WithValue: Story = {
  args: {
    value: "Prefilled text",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const PasswordType: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};
