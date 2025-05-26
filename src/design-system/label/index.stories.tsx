import type { Meta, StoryObj } from "@storybook/react";
import Label from "./index";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["title", "body"],
    },
    htmlFor: {
      control: "text",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Title: Story = {
  args: {
    children: "This is a title label",
    variant: "title",
  },
};

export const Body: Story = {
  args: {
    children: "This is a body label",
    variant: "body",
  },
};
