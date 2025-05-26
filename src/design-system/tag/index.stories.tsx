import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./index";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    onDelete: { action: "deleted" }, // automatically log onDelete calls
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Example Tag",
  },
};

export const LongText: Story = {
  args: {
    children: "This is a much longer tag text to test wrapping",
  },
};
