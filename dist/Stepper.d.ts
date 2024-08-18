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
declare const Stepper: React.FC<StepperProps>;
export default Stepper;
