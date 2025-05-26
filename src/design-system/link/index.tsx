import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "primary" | "black";
}

const Link: React.FC<LinkProps> = ({
  children,
  color = "primary",
  className = "",
  ...props
}) => {
  return (
    <>
      <style jsx>{`
        .link {
          display: flex;
          align-items: center;
          gap: var(--spacing-small);
          font-size: 11px;
          font-style: normal;
          font-weight: 450;
          line-height: 16px; /* 145.455% */
          text-decoration-line: none;
          text-decoration-style: solid;
          text-decoration-skip-ink: none;
          text-decoration-thickness: auto;
          text-underline-offset: auto;
          text-underline-position: from-font;
        }

        .link:hover {
          text-decoration: underline;
        }

        .primary {
          color: var(--colors-primary-200);
        }

        .primary:hover {
          color: var(--colors-primary-300);
        }

        .black {
          color: var(--colors-text-200);
        }

        .black:hover {
          color: var(--colors-primary-200);
        }

        .link:disabled {
          color: var(--colors-text-0);
        }
      `}</style>
      <a className={`link ${color} ${className}`} {...props}>
        {children}
      </a>
    </>
  );
};

export default Link;
