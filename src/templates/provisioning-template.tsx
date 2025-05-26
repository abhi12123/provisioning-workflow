import React from "react";
import type { ReactElement } from "react";

interface ProvisioningTemplateProps {
  header: ReactElement;
  statusAndEstimation: ReactElement;
  serviceDetails: ReactElement;
  additionalDetails: ReactElement;
}

const ProvisioningTemplate: React.FC<ProvisioningTemplateProps> = ({
  header,
  statusAndEstimation,
  serviceDetails,
  additionalDetails,
}) => {
  return (
    <>
      <main className="provisioning-template">
        {header}
        <div className="content">
          {statusAndEstimation}
          <div className="form-container">
            {serviceDetails}
            {additionalDetails}
          </div>
        </div>
      </main>
      <style>{`
        .provisioning-template {
            background: var(--colors-surface-50);
        }

        .content {
            display: flex;
            align-items: flex-start;
            padding-top: var(--spacing-semi-large);
            padding-left: 20px;
            padding-right: 20px;
            gap: 20px;
        }
        
        .form-container{
            flex-grow: 1;
        }
    `}</style>
    </>
  );
};

export default ProvisioningTemplate;
