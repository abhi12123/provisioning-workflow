import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ value, ...props }, ref) => {
    return (
      <>
        <style jsx>{`
          .input-field {
            display: flex;
            padding: var(--spacing-regular) var(--spacing-semi-medium);
            align-items: center;
            flex: 1 0 0;
            align-self: stretch;
            border-radius: 4px;
            border: 1px solid var(--colors-surface-300);
            background: var(--colors-surface-0);
          }

          .input-field:focus {
            outline: none;
            border-color: var(--colors-primary);
          }
        `}</style>
        <input
          ref={ref}
          value={value}
          className={`input-field ${value?.toString().length ? "active" : ""}`}
          {...props}
        />
      </>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
