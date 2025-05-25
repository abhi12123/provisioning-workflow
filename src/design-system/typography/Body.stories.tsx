import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Body from "./Body";

const meta: Meta<typeof Body> = {
  title: "Typography/Body",
  component: Body,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "p", "span", "div"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Body>;

export const Primary: Story = {
  args: {
    as: "p",
    variant: "primary",
    children: "This is primary body text.",
  },
};

export const Secondary: Story = {
  args: {
    as: "span",
    variant: "secondary",
    children: "This is secondary body text.",
  },
};

export const HeadingAs: Story = {
  args: {
    as: "h2",
    variant: "primary",
    children: "This is a heading styled as body",
  },
};
