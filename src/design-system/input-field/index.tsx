import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputField: React.FC<InputFieldProps> = ({ value, ...props }) => {
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
          background: var(--colors-surface-0;
        }
        .active {
        }

        .input-field:focus{
        }
      `}</style>
      <input
        value={value}
        className={`input-field ${value?.toString.length ? "active" : ""} `}
        {...props}
      />
    </>
  );
};

export default InputField;
