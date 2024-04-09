type UserProps = {
  username: string;
  notification: number;
};

const DashBoard = (props: UserProps) => {
  return (
    <div>
      DashBoard
      <h1>{props.username}</h1>
      <p>進捗の通知が{props.notification}件あります</p>
    </div>
  );
};

export default DashBoard;
