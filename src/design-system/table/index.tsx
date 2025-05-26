import { useState } from "react";
import Body from "../typography/Body";
import { ChevronSort } from "@carbon/icons-react";
import Checkbox from "../checkbox";

export type Column<T> = {
  header: string;
  key: keyof T;
  headerAlign?: "left" | "right" | "center";
  cellAlign?: "left" | "right" | "center";
  render?: (row: T) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  selectable?: boolean;
};

const Table = <T extends { id: string }>({
  data,
  columns,
  selectable = true,
}: TableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const allSelected = selectedRows.size === data.length;
  const someSelected = selectedRows.size > 0 && !allSelected;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map((r) => r.id)));
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
          text-align: left;
        }
        .align-right {
          text-align: right;
        }
        .align-center {
          text-align: center;
        }
        .checkbox-cell {
          padding-left: var(--spacing-semi-medium);
          padding-right: var(--spacing-semi-medium);
          width: 40px;
          text-align: center;
        }
      `}</style>

      <div className="table-container">
        <table className="table" role="grid" aria-multiselectable={selectable}>
          <thead className="thead">
            <tr>
              {selectable && (
                <th className="th checkbox-cell">
                  <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onCheckedChange={toggleSelectAll}
                    aria-label="Select all rows"
                    id="header"
                  />
                </th>
              )}
              {columns.map((col, i) => (
                <th key={i} className={`th align-${col.headerAlign ?? "left"}`}>
                  <div className="header-element">
                    <Body variant="primary">{col.header}</Body>
                    <ChevronSort />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={row.id}>
                {selectable && (
                  <td className="checkbox-cell">
                    <Checkbox
                      checked={selectedRows.has(row.id)}
                      onCheckedChange={() => toggleRow(row.id)}
                      aria-label={`Select row ${rowIndex + 1}`}
                      id={row.id}
                    />
                  </td>
                )}
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={`align-${col.cellAlign ?? "left"}`}
                  >
                    {col.render
                      ? col.render(row)
                      : (row[col.key] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
