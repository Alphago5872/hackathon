import UserCard from "./UserCard";

const DUMMY_USERS = [
  {
    name: "Ligma Balls",
    userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98d2f2Vxy42LD1qE5HC4-DwbDuyE5mboZtw&s",
    userId: 1,
  },
  {
    name: "Bill Gates",
    userImage: "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
    userId: 2,
  },
  {
    name: "Thanyaporn Jansawangwong ",
    userImage: "https://images.squarespace-cdn.com/content/v1/5d3d5921fa823600016c24ba/1669699676283-E465A2PGGE12GOB1Y3UO/unsplash-image-vectnOQ4U1k.jpg",
    userId: 3,
  },
];

const SideLeftBar = () => {
  return (
    <div className="sticky top-14">
      <h1 className="text-2xl font-bold">Suggestions</h1>
      <div className="mt-4 [&>*]:mt-2">
        {DUMMY_USERS.map((user) => <UserCard key={user.userId} name={user.name} userImage={user.userImage} />)}
      </div>
    </div>
  );
};

export default SideLeftBar;
