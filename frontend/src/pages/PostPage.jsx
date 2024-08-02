import UserProfile from "../assets/DUMMY User profile.png";

const PostPage = () => {
  

  return (
    <div>
      <div className="p-2 bg-gray-200 rounded-lg">
        <div className="flex bg-white">
          <img className="w-12 h-12" src={UserProfile} />
          {/* <input
            className="bg-transparent outline-none shadow-none focus:outline-none focus:ring-0 mx-2 border-2 focus:border-b-black w-full"
            placeholder="Share something"
          /> */}
          <textarea
            className="bg-transparent appearance-none outline-none shadow-none focus:outline-none focus:ring-0 mx-2 border-2 w-full h-32"
            placeholder="Share something"
            draggable="false"
          />
        </div>
      </div>
      {/* <h1>New thing</h1> */}
    </div>
  );
};

export default PostPage;
