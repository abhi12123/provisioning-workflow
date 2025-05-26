import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: "title" | "body";
}

const Label: React.FC<LabelProps> = ({
  children,
  variant = "title",
  ...props
}) => {
  return (
    <>
      <label className={`label ${variant}`} {...props}>
        {children}
      </label>
      <style>{`
        .label {
            color: var(--color-text-primary);
            font-feature-settings: 'liga' off, 'clig' off;
            font-style: normal;
            line-height: 16px;
            letter-spacing: 0px;
        }
        .title {
            font-size: 12px;
            font-weight: 500;

        }
        .body{
            font-size: 11px;
            font-weight: 450;
        }
      `}</style>
    </>
  );
};

export default Label;
