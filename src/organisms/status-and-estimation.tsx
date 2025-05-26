import React from "react";
import Button from "../design-system/button";
import Heading from "../design-system/typography/Heading";
import Link from "../design-system/link";
import { Add } from "@carbon/icons-react";

interface StatusAndEstimationProps {
  stepper: React.ReactElement;
}

const StatusAndEstimation: React.FC<StatusAndEstimationProps> = ({
  stepper,
}) => {
  return (
    <>
      <div className="status-and-estimation">
        {stepper}
        <div className="footer">
          <div className="price-container">
            <div>
              <Heading variant="md">Estimated Monthly Price*</Heading>
              <Link href="#">View details</Link>
            </div>
            <Heading variant="lg">$99.99</Heading>
          </div>
          <Button
            form="create-service"
            type="submit"
            fullWidth
            leadingIcon={<Add size={16} />}
          >
            Create service
          </Button>
        </div>
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
          height: 591px;
        }
        .price-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          align-self: stretch;
        }
        .price-container > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .status-and-estimation .footer {
          display: flex;
          padding: 16px 20px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          position: absolute;
          bottom: 0;
          width: 100%;
          border-top: 1px solid var(--colors-surface-200);
        }
        .service-details-content,
        .additional-setting-content {
          color: var(--colors-text-subtler);
          display: flex;
          align-items: center;
          gap: 6px;
          flex-flow: wrap;
        }
        .divider {
          width: 1px;
          height: 10px;
        }
      `}</style>
    </>
  );
};

export default StatusAndEstimation;
