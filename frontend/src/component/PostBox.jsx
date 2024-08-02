const PostBox = (props) => {
  let color = "";

  console.log(props.type);

  if (props.type === "scholarship") {
    color = "bg-bright-yellow";
  } else if (props.type === "internship") {
    color = "bg-sky-blue";
  } else if (props.type === "summer") {
    color = "bg-coral";
  } else if (props.type === "extracurricular") {
    color = "bg-lime-green";
  } else if (props.type === "misc") {
    color = "bg-gray-400";
  } else {
    throw Error("Invalid type");
  }

  return (
    <div className={`${color} bg-opacity-30 p-6 rounded-2xl`}>
      <div className="flex justify-between">
        <div className="flex">
          <img className="rounded-full w-12" src={props.userImage} />
          <div className="h-full ml-2 relative">
            <h1 className="font-bold h-fit">{props.author}</h1>
            <p className="font-medium text-sm text-gray-600 self-end relative bottom-0">
              {props.date}
            </p>
          </div>
        </div>
        <h1>{props.status}</h1>
      </div>
      <div className="mt-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.link}
          className="font-semibold text-2xl"
        >
          {props.name}
        </a>
      </div>
      <div className="mt-4">
        <p>{props.content}</p>
      </div>
      {/* <img className="w-max-2/3 mt-4 max-h-80" src={props.imageContent} /> */}
    </div>
  );
};

export default PostBox;
