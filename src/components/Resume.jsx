import React from "react";
import resume from "../assets/resume.pdf"; // Import your resume PDF

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <h1 className="text-2xl font-bold mb-6">My Resume</h1>

      {/* Embed the resume for viewing */}
      <embed
        src={resume}
        type="application/pdf"
        className="w-full h-[200vh] mb-6"
      />

      
    </div>
  );
};

export default Resume;
