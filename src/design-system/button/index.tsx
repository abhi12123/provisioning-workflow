import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary";
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  leadingIcon,
  trailingIcon,
  loading,
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
        }

        .button:focus {
          box-shadow: 0 0 0 3px var(--colors-border-focus); /* custom focus ring */
        }

        .primary {
          background: var(--colors-primary-200);
          color: var(--colors-text-inverse);
        }

        .primary:hover {
          background: var(--colors-primary-300);
        }

        .primary:disabled,
        .secondary:disabled {
          background: var(--colors-surface-100);
          color: var(--colors-text-disabled);
        }

        .secondary {
          border: 1px solid var(--colors-surface-300);
          color: var(--colors-text-subtler);
          background: var(--colors-surface-primary);
        }

        .secondary:hover {
          color: var(--colors-primary-200);
          background: var(--colors-surface-50);
        }

        .tertiary {
          color: var(--colors-text-subtler);
        }

        .tertiary:hover {
          color: var(--colors-primary-200);
        }

        .tertiary:disabled {
          color: var(--colors-text-subtlest);
        }
      `}</style>
      <button className={`button ${variant} ${className}`} {...props}>
        {leadingIcon}
        Button
        {trailingIcon}
      </button>
    </>
  );
};

export default Button;
