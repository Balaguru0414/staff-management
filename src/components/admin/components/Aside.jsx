import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MarcelloLogo from "../../../assets/marcello-logo.png";

const Aside = () => {
  const navigate = useNavigate();
  return (
    <aside
      className="flex flex-col items-center justify-between p-3 w-[300px] 
    h-screen bg-[#12b5e7]"
    >
      <div className="flex flex-col items-center w-full ">
        <h1 className="mt-6 mb-6 text-2xl text-white tracking-wider">
          MARCELLO TECH
        </h1>
        <p className="border-b-1 w-full border mb-8"></p>
        <NavLink
          to="dashboard"
          className="text-white mb-2 w-full font-[500] tracking-wider p-2
              rounded-md text-center bg-white bg-opacity-20 hover:underline
              "
        >
          DASHBOARD
        </NavLink>
        <NavLink
          to="staffs"
          className="text-white mb-2 w-full font-[500] tracking-wider p-2
              rounded-md text-center bg-white bg-opacity-20 hover:underline
              "
        >
          STAFFS
        </NavLink>
        <NavLink
          to="attandance"
          className="text-white w-full font-[500] tracking-wider p-2
              rounded-md text-center bg-white bg-opacity-20 hover:underline
              "
        >
          ATTANDANCE
        </NavLink>
      </div>
      <img
        className="h-32 w-32 opacity-70"
        src={MarcelloLogo}
        alt="Marcello Logo"
      />

      <div
        onClick={() => navigate("/")}
        className="flex cursor-pointer items-center justify-around hover:border-white
        hover:bg-transparent hover:text-white border
      bg-white text-[#12b5e7] w-full rounded-lg p-2 mb-5"
      >
        <h1 className="font-medium">SIGN OUT</h1>
        <ArrowRightOnRectangleIcon class="h-6 w-6" />
      </div>
    </aside>
  );
};

export default Aside;
