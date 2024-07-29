const UserCard = (props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <img className="rounded-full w-14 h-14" src={props.userImage} />
        <p className="text-lg font-semibold">{props.name}</p>
      </div>
      <button className="bg-black text-white px-6 py-2 rounded-full text-sm h-fit">Follow</button>
    </div>
  );
};

export default UserCard;
