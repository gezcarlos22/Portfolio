import React from "react";
import { TabsDemo } from "./ui/DocumentCv";

const Studies = () => {
  return (
    <div className="mt-16 pb-10 w-full">
      <h1 className="heading">
        My{" "}
        <span className="text-purple">Studies, Licenses & Certifications</span>
      </h1>
      <TabsDemo />
    </div>
  );
};

export default Studies;
