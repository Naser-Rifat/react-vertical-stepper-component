import React from "react";

interface Step {
  title: string;
  time: string;
  name: string;
  role: string;
  avatar: string;
  isActive: boolean;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div>
      {steps.map((step, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col items-center mr-4">
            <div
              className={`w-2 h-2 p-1 ${
                step.isActive ? "bg-secondary" : "bg-gray-300"
              } rounded-full flex items-center justify-center`}
            ></div>

            {index < steps.length - 1 && (
              <div className="flex-1 w-[1px] bg-gray-300 h-full"></div>
            )}
          </div>

          <div className="relative flex items-start mb-6">
            <div className="flex-1">
              <h2 className="font-medium leading-none text-sm">{step.title}</h2>
              <div className="text-sm text-gray-500 mb-2">{step.time}</div>

              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={step.avatar}
                  alt="avatar"
                />
                <div>
                  <h3 className="font-medium">{step.name}</h3>
                  <h6 className="text-gray-600">
                    <span className="font-semibold">Role:</span> {step.role}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
