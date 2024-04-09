type UserProps = {
  username: string;
  notification: number;
  name: {
    firstName: string;
    lastName: string;
  };
  followers: {
    firstName: string;
    lastName: string;
  }[];
};

const DashBoard = (props: UserProps) => {
  return (
    <div>
      DashBoard
      <h1>{props.username}</h1>
      <h2>
        こんにちは！{props.name.firstName} {props.name.lastName}さん
      </h2>
      <p>進捗の通知が{props.notification}件あります</p>
      <h2>フォロワー</h2>
      <div>
        {props.followers.map((follower) => (
          <p>
            {follower.firstName}
            {follower.lastName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
