import { AddAlt, Close } from "@carbon/icons-react";
import React from "react";

interface TagProps {
  children: React.ReactNode;
  onDelete: () => void;
}

const Tag: React.FC<TagProps> = ({ children, onDelete }) => {
  return (
    <>
      <div className="tag">
        <AddAlt size={14} className="add-icon" />
        {children}
        <Close size={14} onClick={onDelete} />
      </div>
      <style jsx>{`
        .tag {
          display: flex;
          padding: var(--spacing-smallest) var(--spacing-semi-medium)
            var(--spacing-smallest) var(--spacing-regular);
          align-items: center;
          gap: var(--spacing-smallest);
          justify-items: center;
          border-radius: 1000px;
          background: var(--colors-surface-100);
          width: fit-content;
          font-size: 11px;
        }

        .tag .add-icon {
          color: var(--colors-text-subtlest);
        }
      `}</style>
    </>
  );
};

export default Tag;
