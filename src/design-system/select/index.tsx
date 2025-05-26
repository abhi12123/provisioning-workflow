import * as React from "react";
import Body from "../typography/Body";
import { ChevronDown } from "@carbon/icons-react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  onValueChange?: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  options,
  placeholder = "Select...",
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        className={`select-wrapper ${className ?? ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <div
          role="button"
          tabIndex={0}
          className="select-trigger"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Body variant="secondary">
            {selectedOption ? selectedOption.label : placeholder}
          </Body>
          <ChevronDown />
        </div>

        {open && (
          <ul role="listbox" className="select-list">
            {options.length === 0 ? (
              <li className="select-no-options">No options</li>
            ) : (
              options.map((option) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={value === option.value}
                  tabIndex={0}
                  className={`select-option ${
                    value === option.value ? "selected" : ""
                  }`}
                  onClick={() => {
                    onValueChange?.(option.value);
                    setOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      onValueChange?.(option.value);
                      setOpen(false);
                    }
                  }}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      <style jsx>{`
        .select-wrapper {
          position: relative;
          width: 100%;
          user-select: none;
        }
        .select-trigger {
          display: flex;
          height: 32px;
          padding: 6px;
          justify-content: space-between;
          align-items: center;
          border-radius: 4px;
          border: 1px solid var(--colors-surface-200);
          cursor: pointer;
        }
        .select-list {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin: 0;
          padding: 0;
          list-style: none;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-height: 200px;
          overflow-y: auto;
          z-index: 1000;
        }
        .select-no-options {
          padding: 8px 12px;
          color: #888;
          user-select: none;
        }
        .select-option {
          padding: 8px 12px;
          cursor: pointer;
          color: black;
        }
        .select-option.selected {
          background-color: #0f62fe;
          color: white;
        }
        .select-option:hover {
          background-color: #f5f5f5;
        }
        .select-option.selected:hover {
          background-color: #0f62fe;
        }
      `}</style>
    </>
  );
};

export default Select;
