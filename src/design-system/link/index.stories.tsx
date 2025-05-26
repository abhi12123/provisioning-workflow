import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Link from ".";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "black"],
    },
    href: {
      control: "text",
    },
    target: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Primary Link",
    color: "primary",
    href: "https://example.com",
  },
};

export const Black: Story = {
  args: {
    children: "Black Link",
    color: "black",
    href: "https://example.com",
  },
};

export const External: Story = {
  args: {
    children: "External Link",
    color: "primary",
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};
