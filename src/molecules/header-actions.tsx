import React from "react";
import Credits from "../atoms/credits";
import Button from "../design-system/button";
import { Bullhorn } from "@carbon/icons-react";

const HeaderActions = () => {
  return (
    <>
      <div className="header-actions">
        <Credits />
        <div className="divider" />
        <Button variant="tertiary" leadingIcon={<Bullhorn size={20} />} />
        <Button variant="tertiary" leadingIcon={<Bullhorn size={20} />} />
        <Button variant="tertiary" leadingIcon={<Bullhorn size={20} />} />
        <img src="src/assets/Avatar.png" />
      </div>
      <style jsx>{`
        .header-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        .divider {
          width: 1px;
          height: 20px;
          background: var(--colors-surface-200);
        }
      `}</style>
    </>
  );
};

export default HeaderActions;
