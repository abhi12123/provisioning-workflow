import * as React from "react";
import { Command } from "cmdk";
import InputField from "../input-field";

interface Option {
  label: string;
  value: string;
}

interface ComboboxProps {
  value: string;
  onValueChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

const Combobox: React.FC<ComboboxProps> = ({
  value,
  onValueChange,
  options,
  placeholder = "Select...",
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const selectedOption = options.find((opt) => opt.value === value);
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (selectedOption && !open) {
      setInputValue(selectedOption.label);
    }
  }, [selectedOption, open]);

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
    <div
      ref={wrapperRef}
      style={{ position: "relative", width: "100%" }}
      className={className}
    >
      <InputField
        ref={inputRef}
        type="text"
        value={inputValue}
        onClick={() => setOpen(true)}
        onChange={(e) => {
          setInputValue(e.target.value);
          setOpen(true);
        }}
        placeholder={placeholder}
      />

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginTop: "4px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Command>
            <Command.List>
              {filteredOptions.length === 0 ? (
                <Command.Empty
                  style={{
                    padding: "8px 12px",
                    color: "#888",
                  }}
                >
                  No results found.
                </Command.Empty>
              ) : (
                filteredOptions.map((option) => (
                  <Command.Item
                    key={option.value}
                    value={option.label}
                    onSelect={() => {
                      onValueChange(option.value);
                      setOpen(false);
                    }}
                    style={{
                      padding: "8px 12px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#f5f5f5";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {option.label}
                  </Command.Item>
                ))
              )}
            </Command.List>
          </Command>
        </div>
      )}
    </div>
  );
};

export default Combobox;
