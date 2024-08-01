const PostPage = () => {
  return (
    <div>
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
      <h1>New thing</h1>
    </div>
  );
};

export default PostPage;
