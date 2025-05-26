import React from "react";

interface IHeader {
  lhs?: React.ReactElement;
  rhs?: React.ReactElement;
}

const Header: React.FC<IHeader> = ({ lhs, rhs }) => {
  return (
    <>
      <div className="header">
        {lhs}
        {rhs}
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            height: 48px;
            position: sticky;
            top: 0;
            padding: 12px 20px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--colors-surface-100);
            background: #fff;
          }
        `}
      </style>
    </>
  );
};

export default Header;
