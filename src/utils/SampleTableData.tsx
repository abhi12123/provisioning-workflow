import Link from "../design-system/link";
import type { Column } from "../design-system/table";

export const rowsData = [
  { id: "row1", label: "Row 1" },
  { id: "row2", label: "Row 2" },
  { id: "row3", label: "Row 3" },
  { id: "row4", label: "Row 4" },
];

export const columns: Column<{ id: string; label: string }>[] = [
  {
    header: "Header 1",
    key: "label",
    headerAlign: "left",
    cellAlign: "left",
    render: (row) => <Link href="#">{row.label}, Cell 1</Link>,
  },
  {
    header: "Header 2",
    key: "label",
    headerAlign: "center",
    cellAlign: "center",
    render: (row) => <Link href="#">{row.label}, Cell 2</Link>,
  },
  {
    header: "Header 3",
    key: "label",
    headerAlign: "right",
    cellAlign: "right",
    render: (row) => <Link href="#">{row.label}, Cell 3</Link>,
  },
];
