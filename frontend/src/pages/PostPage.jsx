const PostPage = () => {


  return (
    <div>
      <div className="p-2 bg-gray-200 rounded-lg">
        <div className="flex">
          <input
            className="bg-transparent outline-none shadow-none focus:outline-none focus:ring-0 mx-2 border-2 focus:border-b-black w-full"
            placeholder="Search for keywords here"
            
          />
          <box-icon name="search-alt-2"></box-icon>
        </div>
      </div>
      <h1>New thing</h1>
    </div>
  );
};

export default PostPage;
