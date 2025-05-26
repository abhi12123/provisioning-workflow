import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  loading?: boolean;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  leadingIcon,
  fullWidth = false,
  trailingIcon,
  loading,
  children,
  className = "",
  ...props
}) => {
  return (
    <>
      <style jsx>{`
        .button {
          display: flex;
          height: var(--spacing-large);
          padding: 0px var(--spacing-semi-medium);
          justify-content: center;
          align-items: center;
          gap: var(--spacing-regular);
          align-self: stretch;
          border-radius: var(--spacing-small);
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.2s ease;
          outline: none; /* removes native focus ring */
          font-size: 11px;
          font-style: normal;
          font-weight: 450;
          line-height: 16px;
          letter-spacing: 0px;
          ${fullWidth ? "width: 100%" : "width: max-content"}
        }

        .icon-button {
          width: var(--spacing-large);
          padding: 0;
        }

        .button:focus {
          box-shadow: 0 0 0 3px var(--colors-border-focus); /* custom focus ring */
        }

        .primary-button {
          background: var(--colors-primary-200);
          color: var(--colors-text-inverse);
        }

        .primary-button:hover {
          background: var(--colors-primary-300);
        }

        .primary-button:disabled,
        .secondary:disabled {
          background: var(--colors-surface-100);
          color: var(--colors-text-disabled);
        }

        .secondary-button {
          border: 1px solid var(--colors-surface-300);
          color: var(--colors-text-subtler);
          background: var(--colors-surface-primary);
        }

        .secondary-button:hover {
          color: var(--colors-primary-200);
          background: var(--colors-surface-50);
        }

        .tertiary-button {
          color: var(--colors-text-subtler);
        }

        .tertiary-button:hover {
          color: var(--colors-primary-200);
        }

        .tertiary-button:disabled {
          color: var(--colors-text-subtlest);
        }
      `}</style>
      <button
        className={`button ${variant}-button ${
          !children ? "icon-button" : ""
        } ${className}`}
        {...props}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </button>
    </>
  );
};

export default Button;
