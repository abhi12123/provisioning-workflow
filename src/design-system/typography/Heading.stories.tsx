import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["lg", "md", "sm", "form"],
    },
    as: {
      control: { type: "select" },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "label",
        "strong",
        "em",
        "blockquote",
        "small",
        "code",
      ],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    variant: "lg",
    as: "h1",
    children: "This is a Large Heading",
  },
};

export const Medium: Story = {
  args: {
    variant: "md",
    as: "h2",
    children: "This is a Medium Heading",
  },
};

export const Small: Story = {
  args: {
    variant: "sm",
    as: "h3",
    children: "This is a Small Heading",
  },
};

export const FormLabel: Story = {
  args: {
    variant: "form",
    children: "This is a Form Label",
  },
};
