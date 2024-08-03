import { useEffect, useState } from "react";
import "boxicons";
import DUMMY_USER_PROFILE from "../assets/DUMMY User profile.png";

// import Extracurricular_black_icon from '../assets/icon/extracurricular black.png';
// import Extracurricular_white_icon from '../assets/icon/extracurricular white.png';
// import Internship_black_icon from '../assets/icon/internship black.png';
// import Internship_white_icon from '../assets/icon/internship white.png';
// import Scholarship_black_icon from '../assets/icon/scholarship black.png';
// import Scholarship_white_icon from '../assets/icon/scholarship white.png';
// import SummerProgram_black_icon from '../assets/icon/summer black.png';
// import SummerProgram_white_icon from '../assets/icon/summer white.png';
// import Share_black_icon from '../assets/icon/share black.png';
// import Share_white_icon from '../assets/icon/share white.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiPublicClient } from "../utils/axios";

const SideBar = () => {
  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const redirect = useNavigate();
  const jwt = localStorage.getItem("jwt");

  const params = useParams();

  useEffect(() => {
    const escapeFunc = async () => {
      // Handle page change
      if (params.page) {
        setPage(params.page);
      }
  
      // Handle login state
      if (jwt) {
        setLoggedIn(true);
      }
  
      const userName = localStorage.getItem("username");
  
      setUser({
        ...user,
        userName
      })

      // // Get all of the user's info
      // if (userName) {
      //   const response = await apiPublicClient.get(`/api/${userName}`).then((res) => res.data);

      //   console.log(response);
      // }
    }

    escapeFunc();
  }, []);

  const stateChangeHandler = (newPage) => {
    if (newPage === page) {
      setPage("home");
      redirect("/");
      return;
    }

    setPage(newPage);
    redirect(`/${newPage}`);
  };

  const logoutHandler = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  };

  return (
    <div className="w-full h-[calc(100vh-56px)] sticky top-14 flex flex-col ">
      <div className="mx-auto w-fit">
        {loggedIn ? (
          <>
            <img
              className="w-32 mx-auto"
              src={DUMMY_USER_PROFILE}
              alt="User profile"
            />
            <h1 className="text-4xl font-bold text-center">@{user.userName}</h1>
            {/* <p className="text-gray-600 font-medium text-center">@Johndoe123</p> */}
          </>
        ) : (
          <div className="mx-8 p-2 rounded-xl bg-gray-100 flex flex-col">
            <h1 className="text-3xl font-bold text-center">
              Don't have an account?
            </h1>
            <Link to="/signup" className="text-center text-blue-500 ">
              Sign up now!
            </Link>
          </div>
        )}
      </div>
      <div className="mx-auto w-fit h-auto mt-10 [&>*]:hover:cursor-pointer">
        <div
          className={`flex w-64 gap-4 items-center p-1 px-4 rounded-lg`}
          onClick={() => stateChangeHandler("scholarship")}
        >
          {/* <img className='w-12' src={page === 'scholarship' ? Scholarship_white_icon : Scholarship_black_icon} alt='scholarship' /> */}
          <box-icon
            color={page === "scholarship" ? "#FFD700" : "black"}
            size="3rem"
            type="solid"
            name="graduation"
          ></box-icon>
          <h2
            className={`text-xl select-none ${
              page === "scholarship" && "text-bright-yellow"
            }`}
          >
            Scholarship
          </h2>
        </div>
        <div
          className={`flex w-64 gap-4 items-center p-1 px-4 rounded-lg`}
          onClick={() => stateChangeHandler("internship")}
        >
          {/* <img className='w-12' src={page === 'internship' ? Internship_white_icon : Internship_black_icon} alt='internship' /> */}
          <box-icon
            color={page === "internship" ? "#87CEEB" : "black"}
            size="3rem"
            type="solid"
            name="briefcase"
          ></box-icon>
          <h2
            className={`text-xl select-none ${
              page === "internship" && "text-sky-blue"
            }`}
          >
            Internship
          </h2>
        </div>
        <div
          className={`flex w-64 gap-4 items-center p-1 px-4 rounded-lg`}
          onClick={() => stateChangeHandler("summer")}
        >
          {/* <img className='w-12' src={page === 'summer' ? SummerProgram_white_icon : SummerProgram_black_icon} alt='summer' /> */}
          <box-icon
            color={page === "summer" ? "#FF6F61" : "black"}
            size="3rem"
            name="swim"
          ></box-icon>
          <h2
            className={`text-xl select-none ${
              page === "summer" && "text-coral"
            }`}
          >
            Summer Program
          </h2>
        </div>
        <div
          className={`flex w-64 gap-4 items-center p-1 px-4 rounded-lg`}
          onClick={() => stateChangeHandler("extracurricular")}
        >
          {/* <img className='w-12' src={page === 'extracurricular' ? Extracurricular_white_icon : Extracurricular_black_icon} alt='extracurricular' /> */}
          <box-icon
            color={page === "extracurricular" ? "#32CD32" : "black"}
            size="3rem"
            type="solid"
            name="piano"
          ></box-icon>
          <h2
            className={`text-xl select-none ${
              page === "extracurricular" && "text-lime-green"
            }`}
          >
            Extracurricular
          </h2>
        </div>
        <div
          className={`flex w-64 gap-4 items-center p-1 px-4 rounded-lg ${
            !loggedIn && "opacity-30"
          }`}
          onClick={() => {
            if (loggedIn) stateChangeHandler("share");
          }}
        >
          {/* <img className='w-12' src={page === 'share' ? Share_white_icon : Share_black_icon} alt='share with others' /> */}
          <box-icon
            color={page === "share" ? "#FF69B4" : "black"}
            size="3rem"
            type="solid"
            name="share"
          ></box-icon>
          <h2
            className={`text-xl select-none ${
              page === "share" && "text-hot-pink"
            }`}
          >
            Share
          </h2>
        </div>
      </div>
      <div className="mt-auto mb-14 mx-12 flex">
        {/* <p>Nice!</p> */}
        <Link onClick={logoutHandler} className="p-4 bg-black w-full rounded-2xl text-white text-center font-bold text-xl" to="/">Log out</Link>
        {/* <button className="mt-auto mx-auto w-full py-4">Log out</button> */}
      </div>
    </div>
  );
};

export default SideBar;
