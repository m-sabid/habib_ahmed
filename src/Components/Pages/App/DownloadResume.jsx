import React from "react";
import { FaDownload } from "react-icons/fa";

function DownloadResume() {
  return (
    <button
      className={`bg-primary flex justify-center items-center my-8 shadow-xl text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105`}
      onClick={() => {
        // Add download logic here
        alert("Downloading resume...");
      }}
    >
      <FaDownload className="mr-2" />
      Download Resume
    </button>
  );
}

export default DownloadResume;
