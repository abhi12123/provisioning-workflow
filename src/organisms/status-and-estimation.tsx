import React from "react";
import Button from "../design-system/button";

const StatusAndEstimation = () => {
  return (
    <>
      <div className="status-and-estimation">
        <Button form="create-service" type="submit">
          Create service
        </Button>
      </div>
      <style jsx>{`
        .status-and-estimation {
          display: flex;
          width: 380px;
          padding: 8px 0px;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          border-radius: 8px;
          position: sticky;
          top: 120px;
          background: var(--colors-surface-0);
        }
      `}</style>
    </>
  );
};

export default StatusAndEstimation;
