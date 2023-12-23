import {
  FaCheckCircle,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function MoreInfo() {
  return (
    <div className="grid gap-5 grid-cols-3">
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> My Achievements
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>Area manager - Apex Footwear Ltd. at Apex</li>
          <li>
            Former Area Sales Manager at OPPO Bangladesh Communication Equipment
            Ltd.
          </li>
          <li>
            Former Territory Sales Manager at OPPO Bangladesh Communication
            Equipment Company Limited
          </li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Academic Proficiency
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <b>Executive MBA</b>: Studies Business Administration Discipline
            Executive MBA at Business Administration Discipline{" "}
          </li>
          <li>
            <b> Khulna University: </b>
            Studies Business Administration Discipline
          </li>
          <li>Studied at National University of Bangladesh</li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Let's Connect
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <span className="flex items-center gap-1">
              <FaPhone className="text-primary" /> 01917-942352
            </span>
          </li>
          <li>
            <Link to={"https://web.facebook.com/Shunno.Habib"} className="flex items-center gap-1">
              <FaFacebook className="text-primary" /> /Shunno.Habib
            </Link>
            
          </li>
          {/* <li>
            <span className="flex items-center gap-1">
              <FaGithub className="text-primary" /> GitHub:
            </span>
            github.com/yourusername
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default MoreInfo;
