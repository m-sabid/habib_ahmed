import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "../Components/Shared/SideBar";
import Footer from "../Components/Shared/Footer";

const LayoutMain = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="min-h-[100vh] flex">
        <div className="shadow-xl shadow-shadow max-h-[100vh] fixed top-0 left-0 bottom-0 overflow-y-scroll overflow-x-hidden">
          <SideBar open={open} setOpen={setOpen} />
        </div>
        <div className={`flex-1 max-w-full overflow-hidden mx-2 mt-10 my-0 md:mx-10 transition-width duration-300 ${open ? "pl-60" : "pl-20"}`}>
          <div>
            <Outlet />
          </div>
            <Footer />
        </div>
      </div>
    </>

  );
};

export default LayoutMain;
