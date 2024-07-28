import { Outlet } from "react-router-dom";
import SideBar from "../component/SideBar";

const Root = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-grow-1 max-w-xs w-full mt-14">
        <SideBar />
      </div>
      <div className="flex-grow-3 w-full mt-14">
        <Outlet />
      </div>
      <div className="flex-grow-1 max-w-xs w-full mt-14">
        <h1>Thingy vasfjgsadyi hbsuaidfg suidafb  hidsaygf hksdabf aydsig fsdabfyu asdgfdsa bfyudsag fhkdsab uf dg</h1>
      </div>
    </div>
  );
};

export default Root;
