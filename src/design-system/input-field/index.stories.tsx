import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./index";

// Carbon Design System icons
import { Search, Password, Checkmark, User, Locked } from "@carbon/icons-react";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
    value: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    placeholder: "Search users...",
    leadingElement: <Search size={16} />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    placeholder: "Validated input",
    trailingElement: <Checkmark size={16} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "User ID",
    leadingElement: <User size={16} />,
    trailingElement: <Checkmark size={16} />,
  },
};

export const PrefilledValue: Story = {
  args: {
    value: "example@tessell.io",
    placeholder: "Email",
    trailingElement: <Checkmark size={16} />,
  },
};

export const PasswordField: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    leadingElement: <Locked size={16} />,
    trailingElement: <Password size={16} />,
  },
};

export const DisabledField: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
    leadingElement: <User size={16} />,
    trailingElement: <Checkmark size={16} />,
  },
};
