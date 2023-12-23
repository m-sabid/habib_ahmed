import { useState } from "react";
import { FaDownload } from "react-icons/fa";

function PDFViewer() {
  const pdfDirectLink =
    "https://drive.google.com/uc?id=1MEFfa1gSHDEywJ1vDYo_rHtzB2_JLki1";
  const embedUrl =
    "https://drive.google.com/file/d/1MEFfa1gSHDEywJ1vDYo_rHtzB2_JLki1/preview";

  const [pdfLoaded, setPdfLoaded] = useState(false);

  const handleDownload = () => {
    window.open(pdfDirectLink, "_blank");
  };

  const handleLoad = () => {
    setPdfLoaded(true);
  };

  const handleError = () => {
    setPdfLoaded(true); // Treat errors as if the PDF is loaded to avoid getting stuck in the loading state
  };

  return (
    <div className="w-full p-0">
      
      {!pdfLoaded ? (
        <div className="flex items-center justify-center h-48">
          <p>Loading PDF...</p>
        </div>
      ) : null}
      <iframe
        title="PDF Viewer"
        src={embedUrl}
        width="100%"
        height="480"
        allow="autoplay"
        onLoad={handleLoad}
        onError={handleError}
      ></iframe>
      <div className="flex items-center justify-between mb-2">
        <a
          href={pdfDirectLink}
          download="your-file-name.pdf" // Specify the desired file name
          className={`bg-primary flex justify-center items-center my-8 shadow-xl text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105`}
        >
          <FaDownload className="mr-2" /> Download Resume
        </a>
      </div>
    </div>
  );
}

export default PDFViewer;
