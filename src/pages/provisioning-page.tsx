import React from "react";
import ProvisioningTemplate from "../templates/provisioning-template";
import Header from "../organisms/header";
import Sidebar from "../organisms/sidebar";
import Breadcrumb from "../molecules/breadcrumb";
import HeaderActions from "../molecules/header-actions";
import CreateHeader from "../molecules/create-header";
import StatusAndEstimation from "../organisms/status-and-estimation";
import ServiceDetails from "../organisms/service-details";
import { useSidebarExpanded } from "../providers/sidebar";

const ProvisioningPage = () => {
  const { isExpanded } = useSidebarExpanded();

  return (
    <div className="flex">
      <Sidebar />
      <div className="page-content">
        <Header lhs={<Breadcrumb />} rhs={<HeaderActions />} />
        <ProvisioningTemplate
          header={<CreateHeader />}
          statusAndEstimation={<StatusAndEstimation />}
          serviceDetails={<ServiceDetails />}
          additionalDetails={<></>}
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
