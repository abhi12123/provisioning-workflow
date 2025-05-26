import React, { useState } from "react";
import ProvisioningTemplate from "../templates/provisioning-template";
import Header from "../organisms/header";
import Sidebar from "../organisms/sidebar";
import Breadcrumb from "../molecules/breadcrumb";
import HeaderActions from "../molecules/header-actions";
import CreateHeader from "../molecules/create-header";
import StatusAndEstimation from "../organisms/status-and-estimation";
import ServiceDetails from "../organisms/service-details";
import { useSidebarExpanded } from "../providers/sidebar";
import Stepper from "../molecules/stepper";
import Body from "../design-system/typography/Body";

const ProvisioningPage = () => {
  const { isExpanded } = useSidebarExpanded();

  const [activeFormState, setActiveFormState] =
    useState<string>("service-details");

  console.log("activeFormState", activeFormState);
  console.log(activeFormState === "service-details");
  console.log(activeFormState === "additional-setting");

  return (
    <div className="flex">
      <Sidebar />
      <div className="page-content">
        <Header lhs={<Breadcrumb />} rhs={<HeaderActions />} />
        <ProvisioningTemplate
          header={<CreateHeader />}
          statusAndEstimation={
            <StatusAndEstimation
              stepper={
                <Stepper
                  items={[
                    {
                      id: "service-details",
                      label: "Service Details",
                      content: (
                        <div className="service-details-content">
                          <Body variant="secondary">Oracle_service</Body>
                          <svg
                            width="16"
                            height="10"
                            viewBox="0 0 16 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.29561 9.56825C2.71278 9.56825 0.666687 7.50045 0.666687 4.99995C0.666687 2.45094 2.76192 0.431641 5.29561 0.431641H10.7044C13.2873 0.431641 15.3334 2.49944 15.3334 4.99995C15.3334 7.54896 13.2381 9.56825 10.7044 9.56825H5.29561ZM10.6068 7.93316C11.4066 7.92847 12.1723 7.61282 12.7379 7.05465C13.3035 6.49649 13.6233 5.7408 13.6281 4.95144C13.6233 4.16209 13.3035 3.4064 12.7379 2.84823C12.1723 2.29006 11.4066 1.97441 10.6068 1.96973H5.44176C4.64193 1.97441 3.87621 2.29006 3.31064 2.84823C2.74507 3.4064 2.42523 4.16209 2.42048 4.95144C2.42523 5.7408 2.74507 6.49649 3.31064 7.05465C3.87621 7.61282 4.64193 7.92847 5.44176 7.93316H10.6068Z"
                              fill="#B21C1C"
                            />
                          </svg>
                          <div className="divider" />
                          <Body variant="secondary">oracle_para_profile</Body>
                        </div>
                      ),
                      completed: activeFormState === "service-details",
                    },
                    {
                      id: "additional-setting",
                      label: "Additional Setting",
                      content: (
                        <div className="additional-setting-content">
                          <Body variant="secondary">No Preference</Body>
                          <Body variant="secondary">
                            Enabled minor version update
                          </Body>
                          <div className="divider" />
                          <Body variant="secondary">7-day PITR</Body>
                          <Body variant="secondary">01:00 snapshot time</Body>
                          <div className="divider" />
                        </div>
                      ),
                      completed: activeFormState === "additional-setting",
                    },
                  ]}
                />
              }
            />
          }
          serviceDetails={
            <ServiceDetails onChangeElementInView={setActiveFormState} />
          }
        />
      </div>
      <style jsx>
        {`
          .page-content {
            margin-left: ${isExpanded ? "219px" : "70px"};
          }
        `}
      </style>
    </div>
  );
};

export default ProvisioningPage;
