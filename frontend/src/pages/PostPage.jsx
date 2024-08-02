import { useState } from "react";
import UserProfile from "../assets/DUMMY User profile.png";
import { toast, ToastContainer } from "react-toastify";
import { apiPublicClient } from "../utils/axios";
import { useNavigate } from "react-router-dom";

function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0'); // Ensure two-digit day
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
}

const PostPage = () => {
  const [image, setImaga] = useState("");
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [page, setPage] = useState("");
  const [status, setStatus] = useState("");

  const nav = useNavigate();

  function handleFileUpload(event) {
    setDisabled(true);

    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const base64String = e.target.result;
        console.log("Base64 String:", base64String);

        setImaga(base64String);

        toast.success("Image uploaded successfully", {
          position: "top-center",
          autoClose: 1000,
          pauseOnHover: false,
          onClose: () => {
            // nav("/")
            setDisabled(false);
          },
        });

        // You can use the base64String for further processing, such as uploading to a server
      };

      reader.onerror = function (error) {
        console.error("Error reading file:", error);
      };

      reader.readAsDataURL(file);
    }
  }

  const postHandler = async (e) => {
    e.preventDefault();

    setDisabled(true);

    if (!text || page === "") {
      toast.error("Please enter some message", {
        position: "top-center",
        autoClose: 1000,
        pauseOnHover: false,
        onClose: () => {
          // nav("/")
          setDisabled(false);
        },
      });
      return;
    }

    try {
      const userName = localStorage.getItem("username");

      const response = await apiPublicClient
        .post("/api/createitem", {
          type: page,
          description: text,
          image: image,
          author: userName,
          status: status,
          post_date: getCurrentDate(),
          name: page,
        })
        .then((res) => res.data);

      toast.success("Posted successfully", {
        position: "top-center",
        autoClose: 1000,
        pauseOnHover: false,
        onClose: () => {
          nav("/");
          setDisabled(false);
        },
      });
    } catch (error) {
      toast.error("Error posting", {
        position: "top-center",
        autoClose: 1000,
        pauseOnHover: false,
        onClose: () => {
          // nav("/")
          setDisabled(false);
        },
      });
    }
  };

  const stateChangeHandler = (newPage) => {
    // if (newPage === page) {
    //   setPage("");
    //   return;
    // }

    setPage(newPage);
  };

  return (
    <div>
      <div className="p-8 bg-gray-100 rounded-lg">
        <div className="flex bg-white p-4 rounded-lg">
          <img className="w-12 h-12 mr-4" src={UserProfile} />
          {/* <input
            className="bg-transparent outline-none shadow-none focus:outline-none focus:ring-0 mx-2 border-2 focus:border-b-black w-full"
            placeholder="Share something"
          /> */}
          <textarea
            className="bg-transparent appearance-none outline-none shadow-none focus:outline-none focus:ring-0 w-full h-32 resize-none p-0 m-0"
            placeholder="Share something"
            onChange={(e) => setText(e.target.value)}
          />
          <ToastContainer />
        </div>
        <div>
          <h1 className="text-xl font-bold mt-4">Type of program</h1>
          <div className="flex mt-2 [&>*]:hover:cursor-pointer justify-between">
            <div
              className={`flex w-64 gap-2 items-center rounded-lg`}
              onClick={() => stateChangeHandler("Scholarship")}
            >
              {/* <img className='w-12' src={page === 'scholarship' ? Scholarship_white_icon : Scholarship_black_icon} alt='scholarship' /> */}
              <box-icon
                color={page === "Scholarship" ? "#FFD700" : "black"}
                size="1.5rem"
                type="solid"
                name="graduation"
              ></box-icon>
              <h2
                className={`text-xl select-none ${
                  page === "Scholarship" && "text-bright-yellow"
                }`}
              >
                Scholarship
              </h2>
            </div>
            <div
              className={`flex w-64 gap-2 items-center rounded-lg`}
              onClick={() => stateChangeHandler("Internship")}
            >
              {/* <img className='w-12' src={page === 'internship' ? Internship_white_icon : Internship_black_icon} alt='internship' /> */}
              <box-icon
                color={page === "Internship" ? "#87CEEB" : "black"}
                size="1.5rem"
                type="solid"
                name="briefcase"
              ></box-icon>
              <h2
                className={`text-xl select-none ${
                  page === "Internship" && "text-sky-blue"
                }`}
              >
                Internship
              </h2>
            </div>
          </div>
          <div className="flex mt-2 [&>*]:hover:cursor-pointer justify-between">
            <div
              className={`flex w-64 gap-2 items-center rounded-lg`}
              onClick={() => stateChangeHandler("SP")}
            >
              {/* <img className='w-12' src={page === 'summer' ? SummerProgram_white_icon : SummerProgram_black_icon} alt='summer' /> */}
              <box-icon
                color={page === "SP" ? "#FF6F61" : "black"}
                size="1.5rem"
                name="swim"
              ></box-icon>
              <h2
                className={`text-xl select-none ${
                  page === "SP" && "text-coral"
                }`}
              >
                Summer Program
              </h2>
            </div>
            <div
              className={`flex w-64 gap-2 items-center rounded-lg`}
              onClick={() => stateChangeHandler("Extracurricullar")}
            >
              {/* <img className='w-12' src={page === 'extracurricular' ? Extracurricular_white_icon : Extracurricular_black_icon} alt='extracurricular' /> */}
              <box-icon
                color={page === "Extracurricullar" ? "#32CD32" : "black"}
                size="1.5rem"
                type="solid"
                name="piano"
              ></box-icon>
              <h2
                className={`text-xl select-none ${
                  page === "Extracurricullar" && "text-lime-green"
                }`}
              >
                Extracurricular
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold text-xl">Status</p>
          <div className="flex gap-4 items-end [&>*]:hover:cursor-pointer [&>*]:select-none mt-2">
            <p
              onClick={() => setStatus("open")}
              className={`${
                status === "open" ? "text-black" : "text-gray-400"
              }`}
            >
              Open
            </p>
            <p
              onClick={() => setStatus("closed")}
              className={`${
                status === "closed" ? "text-black" : "text-gray-400"
              }`}
            >
              Closed
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <label className="flex justify-center items-center hover:cursor-pointer">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <box-icon type="solid" name="image-add"></box-icon>
            <p className="ml-2 select-none">Images</p>
          </label>
          <button
            disabled={disabled}
            onClick={postHandler}
            className="bg-black text-white font-bold py-2 px-8 rounded-full focus:outline-none disabled:cursor-not-allowed focus:shadow-outline"
          >
            Post
          </button>
        </div>
      </div>
      {/* <h1>New thing</h1> */}
    </div>
  );
};

export default PostPage;
