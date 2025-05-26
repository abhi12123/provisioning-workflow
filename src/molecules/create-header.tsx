import React from "react";
import Heading from "../design-system/typography/Heading";
import Button from "../design-system/button";
import { Close, Code } from "@carbon/icons-react";

const CreateHeader = () => {
  return (
    <>
      <div className="create-header">
        <Heading variant="md">Create New Oracle Database Service</Heading>
        <div className="button-container">
          <Button leadingIcon={<Code />} variant="tertiary">
            Code
          </Button>
          <Button leadingIcon={<Close />} variant="tertiary"></Button>
        </div>
      </div>
      <style jsx>{`
        .create-header {
          display: flex;
          padding: 8px 20px;
          justify-content: space-between;
          align-items: center;
          background: white;
          position: sticky;
          top: 48px;
          z-index: 1;
        }
        .button-container {
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default CreateHeader;
