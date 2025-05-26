import React from "react";
import Body from "../design-system/typography/Body";

interface StepperItemProps {
  completed: boolean;
  id: string;
  label: string;
  content: React.ReactElement;
}

export interface StepperProps {
  items: StepperItemProps[];
}

const Stepper: React.FC<StepperProps> = ({ items }) => {
  return (
    <>
      <div>
        {items.map((item) => (
          <div className="stepper-container">
            <div className="status">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
              >
                <circle
                  cx="3"
                  cy="3"
                  r="3"
                  fill={item.completed ? "#0942B3" : "#DBE0EB"}
                />
              </svg>
            </div>
            <div id={item.id} className="stepper-content">
              <Body className="title">{item.label}</Body>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .stepper-container {
          display: flex;
          width: 296px;
          padding: 8px 20px;
          align-items: flex-start;
          gap: 12px;
        }
        .stepper-container .status {
          margin-top: 8px;
        }
        .stepper-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          flex: 1 0 0;
        }

        .stepper-content .title {
          color: var(--colors-primary-200);
        }
      `}</style>
    </>
  );
};

export default Stepper;
