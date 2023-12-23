import { FaDownload } from "react-icons/fa";

function DownloadResume() {
  const pdfDirectLink =
  "https://drive.google.com/uc?id=1MEFfa1gSHDEywJ1vDYo_rHtzB2_JLki1";
const embedUrl =
  "https://drive.google.com/file/d/1MEFfa1gSHDEywJ1vDYo_rHtzB2_JLki1/preview";

const handleDownload = () => {
  window.open(pdfDirectLink, "_blank");
};
  return (
    <a
      href={pdfDirectLink}
      download="your-file-name.pdf" // Specify the desired file name
      className={`bg-primary flex justify-center items-center my-5 shadow-xl text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105`}
    >
      <FaDownload className="mr-2" /> Download Resume
    </a>
  );
}

export default DownloadResume;
