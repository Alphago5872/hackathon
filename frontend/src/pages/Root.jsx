import { Outlet } from "react-router-dom";
import SideBar from "../component/SideBar";
import SideLeftBar from "../component/SideLeftBar";

const Root = () => {
  return (
    <div className="flex">
      <div className="flex-grow-1 max-w-xs w-full mt-14">
        <SideBar />
      </div>
      <div className="flex-grow-3 w-full mt-14">

        <Outlet />
      </div>
      <div className="flex-grow-1 max-w-96 w-full mx-4 mt-14 px-4">
        <SideLeftBar />
      </div>
    </div>
  );
};

export default Root;
