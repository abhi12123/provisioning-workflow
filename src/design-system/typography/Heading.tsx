import React from "react";
import type { TypographyHTMLTags } from "../types/Typography";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: TypographyHTMLTags;
  variant?: "lg" | "md" | "sm" | "form";
}

const Heading: React.FC<HeadingProps> = ({
  as = "h1",
  children,
  variant = "md",
  ...rest
}) => {
  const Tag = as;

  return (
    <>
      <Tag className={`heading ${variant}`} {...rest}>
        {children}
      </Tag>

      <style jsx>{`
        .heading {
          font-feature-settings: "liga" off, "clig" off;
          font-style: normal;
        }
        .lg {
          font-size: 20px;
          font-weight: 650;
          line-height: 24px;
          letter-spacing: -0.2px;
        }
        .md {
          font-size: 15px;
          font-weight: 550;
          line-height: 22px;
          letter-spacing: -0.1px;
        }
        .sm {
          font-size: 13px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0px;
        }
        .form {
          font-size: 12px;
          font-weight: 550;
          line-height: 16px;
          letter-spacing: 0px;
        }
      `}</style>
    </>
  );
};

export default Heading;
