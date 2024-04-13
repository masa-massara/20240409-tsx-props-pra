type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  return <h1>{props.status}</h1>;
};

export default Status;
