import React from "react";
const Stepper = ({ steps }) => {
    return (React.createElement("div", null, steps.map((step, index) => (React.createElement("div", { key: index, className: "flex" },
        React.createElement("div", { className: "flex flex-col items-center mr-4" },
            React.createElement("div", { className: `w-2 h-2 p-1 ${step.isActive ? "bg-secondary" : "bg-gray-300"} rounded-full flex items-center justify-center` }),
            index < steps.length - 1 && (React.createElement("div", { className: "flex-1 w-[1px] bg-gray-300 h-full" }))),
        React.createElement("div", { className: "relative flex items-start mb-6" },
            React.createElement("div", { className: "flex-1" },
                React.createElement("h2", { className: "font-medium leading-none text-sm" }, step.title),
                React.createElement("div", { className: "text-sm text-gray-500 mb-2" }, step.time),
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("img", { className: "w-10 h-10 rounded-full", src: step.avatar, alt: "avatar" }),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "font-medium" }, step.name),
                        React.createElement("h6", { className: "text-gray-600" },
                            React.createElement("span", { className: "font-semibold" }, "Role:"),
                            " ",
                            step.role))))))))));
};
export default Stepper;
//# sourceMappingURL=Stepper.js.map