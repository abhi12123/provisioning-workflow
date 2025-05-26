import React from "react";
import Body from "../design-system/typography/Body";

interface SidebarItemProps {
  leadingIcon: React.ReactElement;
  label: string;
  trailingIcon?: React.ReactElement;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  leadingIcon,
  trailingIcon,
  label,
  isActive = false,
}) => {
  return (
    <>
      <Body className={`sidebar-item ${isActive ? "active" : "inactive"} `}>
        <div className="main">
          {leadingIcon}
          {label}
        </div>
        <div className="trailing-icon">{trailingIcon}</div>
      </Body>
      <style jsx>{`
        .sidebar-item {
          padding: 6px 8px;
          border-radius: 4px;
          width: 100%;
          cursor: pointer;
          display: flex;
          items: center;
          justify-content: space-between;
        }
        .sidebar-item .main {
          gap: 10px;
          align-self: stretch;
          align-items: center;
          display: flex;
        }
        .active {
          color: var(--colors-primary-200);
        }
        .inactive {
          color: var(--colors-text-subtler);
        }
        .sidebar-item .trailing-icon {
        }
      `}</style>
    </>
  );
};

export default SidebarItem;
