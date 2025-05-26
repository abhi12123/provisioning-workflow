import React from "react";

interface CommonProps {
  leadingElement?: React.ReactNode;
  trailingElement?: React.ReactNode;
  variant?: "input" | "textarea";
}

type InputVariantProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "input";
};

type TextareaVariantProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant: "textarea";
  };

type InputFieldProps = CommonProps & (InputVariantProps | TextareaVariantProps);

const InputField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputFieldProps
>((props, ref) => {
  const {
    leadingElement,
    trailingElement,
    variant = "input",
    value,
    ...rest
  } = props as any;

  const hasValue = !!value?.toString().length;

  const style = {
    "--input-padding-left": leadingElement
      ? "36px"
      : "var(--spacing-semi-medium)",
    "--input-padding-right": trailingElement
      ? "36px"
      : "var(--spacing-semi-medium)",
  } as React.CSSProperties;
  return (
    <>
      <style jsx>{`
        .input-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .input-field {
          width: 100%;
          padding-top: var(--spacing-regular);
          padding-bottom: var(--spacing-regular);
          padding-left: var(--input-padding-left);
          padding-right: var(--input-padding-right);
          border-radius: 4px;
          border: 1px solid var(--colors-surface-200);
          background: var(--colors-surface-0);
          font-size: 13px;
          font-weight: 450;
          line-height: 20px;
          font-feature-settings: "liga" off, "clig" off;
          color: var(--colors-text-default);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          resize: none;
        }

        .input-field::placeholder {
          color: var(--colors-text-subtlest);
        }

        .input-field:focus {
          outline: none;
          border-color: var(--colors-primary);
          box-shadow: 0 0 0 3px var(--colors-border-focus);
        }

        .input-field:disabled {
          background: var(--colors-opacity-transparent);
          color: var(--colors-text-disabled);
          cursor: not-allowed;
        }

        .input-field:disabled::placeholder {
          color: var(--colors-text-disabled);
        }

        .input-leading-element,
        .input-trailing-element {
          position: absolute;
          top: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          transition: color 0.2s ease;
          color: var(--colors-text-subtlest);
        }

        .input-leading-element {
          left: 12px;
        }

        .input-trailing-element {
          right: 12px;
        }

        .input-wrapper:focus-within .input-leading-element,
        .input-wrapper-within .input-trailing-element {
          color: var(--colors-primary);
        }

        .input-field:disabled ~ .input-leading-element,
        .input-field:disabled ~ .input-trailing-element {
          color: var(--colors-text-disabled);
        }

        .input-wrapper.has-value .input-leading-element,
        .input-wrapper.has-value .input-trailing-element {
          color: var(--colors-text-default);
        }
      `}</style>

      <div
        className={`input-wrapper ${hasValue ? "has-value" : ""}`}
        style={style}
      >
        {leadingElement && (
          <div className="input-leading-element">{leadingElement}</div>
        )}

        {variant === "textarea" ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            value={value}
            className="input-field"
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            value={value}
            className="input-field"
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {trailingElement && (
          <div className="input-trailing-element">{trailingElement}</div>
        )}
      </div>
    </>
  );
});

InputField.displayName = "InputField";

export default InputField;
