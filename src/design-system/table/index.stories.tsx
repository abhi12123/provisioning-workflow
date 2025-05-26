import type { Meta, StoryObj } from "@storybook/react";
import Table, { type Column } from "./index"; // adjust path if necessary
import Link from "../link";

type RowData = {
  id: string;
  label: string;
  amount: number;
  status: string;
};

const data: RowData[] = [
  { id: "1", label: "Item A", amount: 100, status: "Pending" },
  { id: "2", label: "Item B", amount: 250, status: "Approved" },
  { id: "3", label: "Item C", amount: 500, status: "Rejected" },
];

const columns: Column<RowData>[] = [
  {
    header: "Label",
    key: "label",
    headerAlign: "left",
    cellAlign: "left",
  },
  {
    header: "Amount",
    key: "amount",
    headerAlign: "right",
    cellAlign: "right",
  },
  {
    header: "Status",
    key: "status",
    headerAlign: "center",
    cellAlign: "center",
  },
];

const columnsWithRender: Column<RowData>[] = [
  {
    header: "Label",
    key: "label",
    headerAlign: "left",
    cellAlign: "left",
    render: (row: any) => <Link href="#">{row.label}</Link>,
  },
  {
    header: "Amount",
    key: "amount",
    headerAlign: "right",
    cellAlign: "right",
  },
  {
    header: "Status",
    key: "status",
    headerAlign: "center",
    cellAlign: "center",
    render: (row: any) => {
      const color =
        row.status === "Approved"
          ? "green"
          : row.status === "Pending"
          ? "orange"
          : "red";
      return <span style={{ color }}>{row.status}</span>;
    },
  },
];

const meta: Meta<typeof Table<RowData>> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Table<RowData>>;

export const Basic: Story = {
  args: {
    data,
    columns,
    selectable: true,
  },
};

export const WithoutSelectable: Story = {
  args: {
    data,
    columns,
    selectable: false,
  },
};

export const WithCustomRender: Story = {
  args: {
    data,
    columns: columnsWithRender,
    selectable: true,
  },
};
