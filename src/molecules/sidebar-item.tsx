import React from "react";

interface SidebarItemProps {
  leadingIcon: React.ReactElement;
  label: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  leadingIcon,
  label,
  isActive = false,
}) => {
  return (
    <>
      <div className={`sidebar-item ${isActive ? "active" : "inactive"} `}>
        {leadingIcon}
        {label}
      </div>
      <style jsx>{`
        .sidebar-item {
          display: flex;
          padding: 6px 8px;
          align-items: center;
          gap: 10px;
          align-self: stretch;
          border-radius: 4px;
          width: 100%;
        }
        .active {
          color: var(--colors-primary-200);
        }
        .inactive {
          color: var(--colors-text-subtler);
        }
      `}</style>
    </>
  );
};

export default SidebarItem;
