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

  // Close dropdown on outside click
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
        className={className}
        style={{ position: "relative", width: "100%", userSelect: "none" }}
      >
        <div
          role="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="select-trigger"
        >
          <Body variant="secondary">
            {selectedOption ? selectedOption.label : placeholder}
          </Body>
          <ChevronDown />
        </div>

        {open && (
          <ul
            role="listbox"
            tabIndex={-1}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              margin: 0,
              padding: 0,
              listStyle: "none",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: 4,
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              maxHeight: 200,
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {options.length === 0 ? (
              <li
                style={{
                  padding: "8px 12px",
                  color: "#888",
                  userSelect: "none",
                }}
              >
                No options
              </li>
            ) : (
              options.map((option) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={value === option.value}
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
                  tabIndex={0}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    backgroundColor:
                      value === option.value ? "#0f62fe" : "transparent",
                    color: value === option.value ? "white" : "black",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      value === option.value ? "#0f62fe" : "#f5f5f5")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      value === option.value ? "#0f62fe" : "transparent")
                  }
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
      <style jsx>{`
        .select-trigger {
          display: flex;
          height: 32px;
          padding: 6px;
          justify-content: space-between;
          align-items: center;
          border-radius: 4px;
          border: 1px solid var(--colors-surface-200);
        }
      `}</style>
    </>
  );
};

export default Select;
