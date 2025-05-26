import React, { useState } from "react";
import SidebarItem from "../molecules/sidebar-item";
import Heading from "../design-system/typography/Heading";
import TesselBrandIcon from "../assets/tessel-brand-icon";
import {
  Add,
  Apps,
  Checkmark,
  CicsDb2Connection,
  CustomerService,
  Db2Database,
  Demo,
  IbmCloudBareMetalServer,
  MeterAlt,
  OpenPanelLeft,
  PinFilled,
  Script,
} from "@carbon/icons-react";
import Button from "../design-system/button";
import { useSidebarExpanded } from "../providers/sidebar";
import Select from "../design-system/select";

const Sidebar = () => {
  const { toggleExpanded, isExpanded } = useSidebarExpanded();
  const options = [
    { label: "DB Services", value: "db" },
    { label: "Provisioning", value: "provisioning" },
    { label: "Servers", value: "servers" },
  ];

  return (
    <>
      <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="brand">
              <TesselBrandIcon />
              <Heading variant="md">Tessell</Heading>
            </div>
            <Button
              variant="tertiary"
              leadingIcon={<OpenPanelLeft size={16} />}
              onClick={() => toggleExpanded()}
            />
          </div>
          <div className="sidebar-items-container">
            <SidebarItem
              leadingIcon={<Apps size={16} />}
              label={isExpanded ? "Apps" : ""}
            />
            {isExpanded && <Select options={options} value="db" />}
            <SidebarItem
              leadingIcon={<Db2Database size={16} />}
              label={isExpanded ? "My services" : ""}
              isActive
            />
            <SidebarItem
              leadingIcon={<CicsDb2Connection size={16} />}
              label={isExpanded ? "Provisioning" : ""}
            />
            <SidebarItem
              leadingIcon={<Checkmark size={16} />}
              label={isExpanded ? "Availability Machines" : ""}
            />
            <SidebarItem
              leadingIcon={<Demo size={16} />}
              label={isExpanded ? "Dataflix" : ""}
            />
            <SidebarItem
              leadingIcon={<Script size={16} />}
              label={isExpanded ? "ScriptLibrary" : ""}
            />
            <SidebarItem
              leadingIcon={<MeterAlt size={16} />}
              label={isExpanded ? "Benchmarks" : ""}
            />
            <SidebarItem
              leadingIcon={<IbmCloudBareMetalServer size={16} />}
              label={isExpanded ? "Servers" : ""}
            />
          </div>
        </div>
        <div className="sidebar-items-container">
          <SidebarItem
            leadingIcon={<Add size={16} />}
            label={isExpanded ? "Invite people" : ""}
            trailingIcon={isExpanded ? <PinFilled /> : undefined}
          />
          <SidebarItem
            leadingIcon={<CustomerService size={16} />}
            label={isExpanded ? "Help & Support" : ""}
            trailingIcon={isExpanded ? <PinFilled /> : undefined}
          />
        </div>
      </div>
      <style jsx>
        {`
          .sidebar {
            display: inline-flex;
            padding: var(--spacing-medium);
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            flex-shrink: 0;
            border-right: 1px solid var(--colors-surface-100);
            background: var(--colors-surface-0);
            position: fixed;
            height: 100dvh;
            font-weight: 600;
          }
          .sidebar-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 11px;
            width: 100%;
          }
          .sidebar-items-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .expanded {
            width: 219px;
            transition: 400ms ease-in-out;
          }
          .collapsed {
            transition: 400ms ease-in-out;
            width: 70px;
          }
          .sidebar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          .brand {
            display: flex;
            height: 24px;
            align-items: center;
            gap: 2.896px;
          }
          .collapsed .brand {
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
