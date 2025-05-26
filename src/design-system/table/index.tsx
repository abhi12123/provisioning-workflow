import { useState } from "react";
import Body from "../typography/Body";
import { ChevronSort } from "@carbon/icons-react";
import Link from "../link";
import Checkbox from "../checkbox"; // your Checkbox component

const rowsData = [
  { id: "row1", label: "Row 1" },
  { id: "row2", label: "Row 2" },
  { id: "row3", label: "Row 3" },
  { id: "row4", label: "Row 4" },
];

const Table = () => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const allSelected = selectedRows.size === rowsData.length;
  const someSelected = selectedRows.size > 0 && !allSelected;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(rowsData.map((r) => r.id)));
    }
  };

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <>
      <style jsx>{`
        .table-container {
          border: 1px solid var(--colors-surface-300);
          border-radius: var(--spacing-small);
          overflow: hidden;
          width: 100%;
        }
        .table {
          border-collapse: collapse;
          width: 100%;
        }
        .thead {
          background: var(--colors-surface-200);
        }
        .th {
          padding: var(--spacing-semi-medium);
          color: var(--colors-primary-200);
          user-select: none;
        }
        .header-element {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        td {
          padding: var(--spacing-regular) var(--spacing-semi-medium);
        }
        .align-left {
          justify-content: start;
        }
        .align-right {
          justify-content: end;
        }
        .checkbox-cell {
          padding-left: var(--spacing-semi-medium);
          padding-right: var(--spacing-semi-medium);
          width: 40px;
          text-align: center;
        }
      `}</style>
      <div className="table-container">
        <table className="table" role="grid" aria-multiselectable="true">
          <thead className="thead">
            <tr>
              <th className="th checkbox-cell">
                {/* Header checkbox */}
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onCheckedChange={toggleSelectAll}
                  aria-label="Select all rows"
                  id="header"
                />
              </th>
              <th className="th">
                <div className="header-element align-left">
                  <Body variant="primary">Header 1</Body>
                  <ChevronSort />
                </div>
              </th>
              <th className="th">
                <div className="header-element align-left">
                  <Body variant="primary">Header 2</Body>
                  <ChevronSort />
                </div>
              </th>
              <th className="th">
                <div className="header-element align-right">
                  <Body variant="primary">Header 3</Body>
                  <ChevronSort />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rowsData.map(({ id, label }, index) => (
              <tr key={id}>
                <td className="checkbox-cell">
                  <Checkbox
                    checked={selectedRows.has(id)}
                    onCheckedChange={() => toggleRow(id)}
                    aria-label={`Select row ${index + 1}`}
                    id={id}
                  />
                </td>
                <td>
                  <Link href="#">{label}, Cell 1</Link>
                </td>
                <td>
                  <Link href="#">{label}, Cell 2</Link>
                </td>
                <td>
                  <Link href="#">{label}, Cell 3</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
