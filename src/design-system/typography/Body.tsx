import React from "react";
import type { TypographyHTMLTags } from "../types/Typography";

interface BodyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: TypographyHTMLTags;
  variant?: "primary" | "secondary";
}

const Body: React.FC<BodyProps> = ({
  as = "h1",
  children,
  variant = "primary",
  className,
  ...rest
}) => {
  const Tag = as;

  return (
    <>
      <Tag className={`body ${variant}-text ${className}`} {...rest}>
        {children}
      </Tag>

      <style jsx>{`
        .body {
          font-feature-settings: "liga" off, "clig" off;
          font-style: normal;
        }
        .primary-text {
          font-size: 13px;
          font-weight: 450;
          line-height: 20px;
          letter-spacing: 0px;
        }
        .secondary-text {
          font-size: 11px;
          font-weight: 450;
          line-height: 16px;
          letter-spacing: 0px;
        }
      `}</style>
    </>
  );
};

export default Body;
