import * as React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckboxChecked, CheckboxIndeterminate } from "@carbon/icons-react";
import Body from "../typography/Body";

interface CheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  labelDescription?: string;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  indeterminate = false,
  onCheckedChange,
  label,
  id,
  disabled = false,
  labelDescription,
}) => {
  return (
    <div className={`checkbox-container ${disabled ? "disabled" : ""}`}>
      <RadixCheckbox.Root
        checked={indeterminate ? "indeterminate" : checked}
        id={id}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
      >
        {indeterminate ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_10474)">
              <path
                d="M4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4C0.5 2.067 2.067 0.5 4 0.5Z"
                fill="#EBF2FF"
              />
              <path
                d="M4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4C0.5 2.067 2.067 0.5 4 0.5Z"
                stroke="#0942B3"
              />
              <path
                d="M4.5 8H11.5"
                stroke="#0942B3"
                stroke-width="1.66666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_10474">
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        ) : checked ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="15"
              height="15"
              rx="2"
              fill="var(--colors-primary-200)"
              stroke="var(--colors-primary-200)"
            />
            <path
              d="M11.3337 5.5L6.75033 10.0833L4.66699 8"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="custom-checkbox"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4C0.5 2.067 2.067 0.5 4 0.5Z"
              stroke="var(--colors-surface-500)"
              fill="var(--colors-surface-0)"
            />
          </svg>
        )}
      </RadixCheckbox.Root>

      {label && (
        <label htmlFor={id}>
          <Body className="title">{label}</Body>
          {labelDescription && (
            <Body className="description" variant="secondary">
              {labelDescription}
            </Body>
          )}
        </label>
      )}

      <style jsx>{`
        .checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-regular);
          cursor: pointer;
          opacity: 1;
        }

        .checkbox-container.disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .checkbox-container svg path {
          transition: stroke 0.2s ease, fill 0.2s ease;
        }

        // .checkbox-container:not(.disabled):hover svg path {
        //   stroke: var(--colors-primary-200);
        //   fill: var(--colors-secondary-0);
        // }

        .checkbox-container:focus-within svg path {
          box-shadow: 0 0 0 3px var(--colors-border-focus);
        }

        .checkbox-container label .title {
          color: var(--colors-text-200);
        }

        .checkbox-container label .description {
          color: var(--colors-text-subtlest);
        }

        .checkbox-container.disabled svg path {
          stroke: var(--colors-surface-300); /* dimmed border */
          fill: var(--colors-surface-100); /* dimmed fill */
        }
      `}</style>
    </div>
  );
};

export default Checkbox;
