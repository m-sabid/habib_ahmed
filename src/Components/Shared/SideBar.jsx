/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  FaEdit,
  FaFile,
  FaFolder,
  FaGlobe,
  FaHandHoldingUsd,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbFileSettings } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";
import profile from "../../assets/profile_picture.jpg";
import { FaFacebook } from "react-icons/fa";

const Menus = [
  // Biography
  // {
  //   title: "Biography",
  //   icons: <FaHandHoldingUsd />,
  //   subMenus: [
  //     {
  //       title: "Biography",
  //       icons: <TbFileSettings />,
  //       to: "/Biography",
  //     },
  //     {
  //       title: "Option",
  //       icons: <FaMoneyCheckDollar />,
  //       to: "/Option",
  //     },
  //   ],
  // },
  {
    title: "Documents",
    icons: <FaFolder />,
    subMenus: [
      {
        title: "Resume",
        icons: <FaFile />,
        to: "/resume",
      },
      {
        title: "Option",
        icons: <FaMoneyCheckDollar />,
        to: "/Option",
      },
    ],
  },
];

const SocialLinks = [
  {
    title: "Facebook",
    icons: <FaFacebook className="text-white" />,
    to: "https://web.facebook.com/Shunno.Habib", // Replace with your actual link
  },
  {
    title: "Twitter",
    icons: <FaTwitter className="text-white" />,
    to: "#", // Replace with your actual link
  },
  {
    title: "Instagram",
    icons: <FaInstagram className="text-white" />,
    to: "#", // Replace with your actual link
  },
  {
    title: "TikTok",
    icons: <FaTiktok className="text-white" />,
    to: "#", // Replace with your actual link
  },
  {
    title: "YouTube",
    icons: <FaYoutube className="text-white" />,
    to: "#", // Replace with your actual link
  },
];

const SideBar = ({ open, setOpen }) => {
  const [expandedMenus, setExpandedMenus] = useState([]);

  const handleToggleSubMenu = (index) => {
    const expandedMenusCopy = [...expandedMenus];
    if (expandedMenusCopy.includes(index)) {
      // Remove index if already expanded
      expandedMenusCopy.splice(expandedMenusCopy.indexOf(index), 1);
    } else {
      // Add index if collapsed
      expandedMenusCopy.push(index);
    }
    setExpandedMenus(expandedMenusCopy);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once on component mount to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-full relative">
      <div
        className={`${
          open ? "w-60" : "w-20 "
        } min-h-[100vh] pb-10 relative duration-300`}
      >
        {/* Welcome Section */}
        <div className={`absolute pt-5 cursor-pointer w-full`}>
          <div className="flex justify-between items-center w-full px-3">
            <h1 className={`text-2xl ${!open && "hidden"} uppercase`}>
              Welcome
            </h1>
            <p
              className={`text-2xl ${!open && "flex justify-center w-full"}`}
              onClick={() => setOpen(!open)}
            >
              <TfiAlignJustify />
            </p>
          </div>
        </div>

        {/* Profile Section */}
        <div className="pt-16 flex flex-col items-center justify-center">
          <div
            className={`relative m-3 overflow-hidden ${open && "h-48 w-48"} ${
              !open && "h-20 w-20 p-2 m-0"
            }`}
          >
            <img
              className="rounded-full w-full h-full object-cover"
              src={profile}
              alt="Profile"
            />

            {/* Transparent overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300 bg-black rounded-full">
              <div className="text-white flex items-center gap-2">
                <FaEdit />
                <span>Edit Profile</span>
              </div>
            </div>
          </div>
          <h3 className="text-2xl text-center mt-2 font-teko font-medium italic">
            {!open ? "Habib" : "Habib Rahman"}
          </h3>
          {open && (
            <p className="my-3 text-accent">Be your best. Never give up</p>
          )}

          {/* On close menu */}
          {!open && (
            <div>
              <div className="flex flex-col items-center justify-center py-2 gap-4 border-b-2 border-t-2 w-full border-neutral">
                {SocialLinks?.map((dt, index) => {
                  console.log(dt.to);
                  return (
                    <>
                      <Link
                        to={dt.to}
                        target="_blank"
                        className="bg-blue-500 p-2 rounded-full"
                      >
                        {dt.icons}
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* On open Menu */}
        <div
          className={`flex items-center justify-center py-2 gap-4 ${
            open && "border-b-2"
          } w-full border-neutral`}
        >
          {open &&
            SocialLinks?.map((dt, index) => {
              return (
                <>
                  <Link
                    to={dt.to}
                    target="_blank"
                    className="bg-blue-500 p-2 rounded-full"
                  >
                    {dt.icons}
                  </Link>
                </>
              );
            })}
        </div>

        <ul className={`${open && "mt-4"}`}>
          {Menus?.map((Menu, index) => (
            <div key={index}>
              {Menu.subMenus && Menu.subMenus.length > 0 ? (
                <div>
                  <div
                    className={`text-lg w-full font-medium cursor-pointer flex justify-between ${
                      !open && "justify-center pl-8 py-2"
                    } py-1 px-4`}
                    onClick={() => handleToggleSubMenu(index)}
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-erp_menu_icons">{Menu.icons} </p>
                      <span
                        className={`${
                          !open && "hidden scale-0 "
                        } origin-left duration-200 text-md text-erp_menu_text`}
                      >
                        {Menu.title}
                      </span>
                    </div>
                    <div>
                      <span
                        className={`${
                          !open && "hidden scale-0"
                        } origin-left duration-200`}
                      >
                        {expandedMenus.includes(index) ? "-" : "+"}
                      </span>
                    </div>
                  </div>
                  <ul
                    className={`${
                      expandedMenus.includes(index)
                        ? "max-h-screen transition-max-h duration-[2s] ease-in-out"
                        : "max-h-0 transition-max-h duration-[1s] ease-in-out"
                    } overflow-hidden`}
                  >
                    {Menu.subMenus.map((submenu, subIndex) => (
                      <Link key={subIndex} to={submenu.to}>
                        <li
                          className={`flex pb-1 rounded-md cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 py-1 px-6 ${
                            subIndex === 0 && "bg-light-white"
                          }`}
                        >
                          <Link className="pl-4 text-erp_submenu_icons">
                            {submenu.icons}
                          </Link>
                          <span
                            className={`${
                              !open && "hidden scale-0"
                            } origin-left duration-200 text-md text-erp_submenu_text`}
                          >
                            {submenu.title}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link key={index} to={Menu.to}>
                  <li
                    className={
                      "selection:font-medium font-semibold text-lg overflow-hidden"
                    }
                  >
                    <div
                      className={`flex justify-between rounded-2xl py-1 px-4 ${
                        !open && "justify-center pl-8 py-2"
                      }`}
                    >
                      <div className="flex  items-center gap-2">
                        {Menu.icons}{" "}
                        <span
                          className={`${
                            !open && "hidden scale-0"
                          } origin-left duration-200`}
                        >
                          {Menu.title}
                        </span>
                      </div>
                    </div>
                  </li>
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
