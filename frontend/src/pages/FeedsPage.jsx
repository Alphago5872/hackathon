import { useParams } from "react-router-dom";
import PostBox from "../component/PostBox";
import { useEffect, useReducer, useState } from "react";
import { apiPublicClient } from "../utils/axios";

// const DUMMY_DATA = [
//   {
//     author: "Ligma",
//     userImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98d2f2Vxy42LD1qE5HC4-DwbDuyE5mboZtw&s",
//     type: "scholarship",
//     date: "2 Hours Ago",
//     content:
//       "Found an interesting competition, here is the link: www.example.com",
//     status: "Open",
//     id: 1,
//   },
//   {
//     author: "Ligma",
//     userImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98d2f2Vxy42LD1qE5HC4-DwbDuyE5mboZtw&s",
//     type: "internship",
//     date: "2 Hours Ago",
//     content:
//       "Found an interesting internship, here is the link: www.example2.com",
//     status: "Closed",
//     id: 2,
//   },
//   {
//     author: "Ligma",
//     userImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98d2f2Vxy42LD1qE5HC4-DwbDuyE5mboZtw&s",
//     type: "summer",
//     date: "2 Hours Ago",
//     content:
//       "Found an interesting competition, here is the link: www.example.com",
//     status: "Open",
//     id: 3,
//   },
//   {
//     author: "Ligma",
//     userImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98d2f2Vxy42LD1qE5HC4-DwbDuyE5mboZtw&s",
//     type: "extracurricular",
//     date: "2 Hours Ago",
//     content:
//       "Found an interesting competition, here is the link: www.example.com",
//     status: "Open",
//     id: 4,
//   },
//   {
//     author: "Ligma",
//     userImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98d2f2Vxy42LD1qE5HC4-DwbDuyE5mboZtw&s",
//     type: "misc",
//     date: "2 Hours Ago",
//     content:
//       "Found an interesting competition, here is the link: www.example.com",
//     status: "Open",
//     id: 5,
//   },
//   {
//     author: "Ligma",
//     userImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98d2f2Vxy42LD1qE5HC4-DwbDuyE5mboZtw&s",
//     type: "scholarship",
//     date: "2 Hours Ago",
//     content:
//       "Found an interesting competition, here is the link: www.example.com",
//     status: "Open",
//     id: 6,
//   },
//   {
//     author: "Ligma",
//     userImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98d2f2Vxy42LD1qE5HC4-DwbDuyE5mboZtw&s",
//     type: "scholarship",
//     date: "2 Hours Ago",
//     content:
//       "Found an interesting competition, here is the link: www.example.com",
//     status: "Open",
//     id: 7,
//   },
// ];

const filterReducer = (state, action) => {
  if (action.type === "KEYWORDS") {
    return {
      ...state,
      keywords: action.payload,
    };
  } else if (action.type === "STATUS") {
    if (action.payload === state.status) {
      return {
        ...state,
        status: "",
      };
    } else {
      return {
        ...state,
        status: action.payload,
      };
    }
  } else if (action.type === "OPEN_FILTER") {
    return {
      ...state,
      openFilter: !state.openFilter,
    };
  }

  throw Error("Invalid action type");
};

const CHANGE_DATA = {
  "Internship": "internship",
  "Scholarship": "scholarship",
  "SP": "summer",
  "Extracurricular": "extracurricular",
}

const HomePage = () => {
  const params = useParams();
  const [filterState, dispatch] = useReducer(filterReducer, {
    keywords: "",
    openFilter: false,
    status: "",
  });
  const [data, setData] = useState([]);

  const filterContent = (content) => {
    let condition = true;

    console.log(content.type)
    console.log(content.author)
    console.log(content.post_date)
    console.log(content.description)
    console.log(content.status)

    if (params.page !== undefined) {
      condition = CHANGE_DATA[content.type] === params.page;
    }

    if (filterState.keywords !== "") {
      condition = condition && (content.description.toLowerCase().includes(filterState.keywords.toLowerCase()) || content.name.toLowerCase().includes(filterState.keywords.toLowerCase()));
    }

    if (filterState.status !== "") {
      condition = condition && content.status === filterState.status.toLowerCase();
    }

    return condition;
  };

  useEffect(() => {
    const escapeFunc = async () => {
      try {
        const response = await apiPublicClient
          .get("/api/getitem")
          .then((res) => res.data);

        // console.log(response.map((ele) => {
        //   console.log(CHANGE_DATA[ele.type])

        //   return { ...ele, type: CHANGE_DATA[ele.type] };
        // }));

        // console.log(response[0].type)
        // console.log(typeof response)
        // console.log(typeof [])

        setData(response);
      } catch (error) {
        console.log("Error getting data");
      }
    };

    escapeFunc();
  }, []);

  console.log(data)

  return (
    <div className="h-full">
      <div className="p-2 bg-gray-200 rounded-lg">
        <div className="flex">
          <div
            onClick={() => dispatch({ type: "OPEN_FILTER" })}
            className="flex ml-2 items-center hover:cursor-pointer"
          >
            <box-icon name="filter-alt" size="1.4rem"></box-icon>
            <p className="select-none ml-1">Filter</p>
          </div>
          <input
            className="bg-transparent outline-none shadow-none focus:outline-none focus:ring-0 mx-2 border-2 focus:border-b-black w-full"
            placeholder="Search for keywords here"
            onChange={(e) =>
              dispatch({ type: "KEYWORDS", payload: e.target.value })
            }
          />
          <box-icon name="search-alt-2"></box-icon>
        </div>
        {filterState.openFilter && (
          <div className="mt-2 ml-3">
            <div className="flex align-middle">
              <p className="text-bold text-xl self-center">Status:</p>
              <div className="flex ml-8 gap-4 items-end [&>*]:hover:cursor-pointer [&>*]:select-none">
                <p
                  onClick={() => dispatch({ type: "STATUS", payload: "Open" })}
                  className={`${
                    filterState.status === "Open"
                      ? "text-black"
                      : "text-gray-400"
                  }`}
                >
                  Open
                </p>
                <p
                  onClick={() =>
                    dispatch({ type: "STATUS", payload: "Closed" })
                  }
                  className={`${
                    filterState.status === "Closed"
                      ? "text-black"
                      : "text-gray-400"
                  }`}
                >
                  Closed
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 [&>*]:mt-2">
        {data.filter(filterContent).map((d) => (
          <PostBox
            // key={d.id}
            author={d.author}
            userImage={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98d2f2Vxy42LD1qE5HC4-DwbDuyE5mboZtw&s"
            }
            type={CHANGE_DATA[d.type]}
            date={d.post_date}
            content={d.description}
            status={d.status}
            imageContent={d.image}
            name={d.name}
            link={d.link}
          />
        ))}
      </div>
      {/* <h1>Home Page</h1>
      <p>Welcome to the home page!</p> */}
    </div>
  );
};

export default HomePage;
